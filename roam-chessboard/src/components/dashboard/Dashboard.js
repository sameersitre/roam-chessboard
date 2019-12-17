import React, { Component } from 'react'
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            n: 0,
            m: 20,
            gridInput: 3,
            arrayObject: [],
            selectedBox: 3,
            i: 0, j: 0,
            outputArray: []
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        // this.changeGrid()
        window.addEventListener('keydown', this.checkKey)
    }
    checkKey = (e) => {
        e = e || window.event;

        if (e.keyCode == '37') {
            console.log('left');
            var OParray = this.state.outputArray;
            var change = this.state.j - 1
            OParray.push([this.state.i, change])
            this.setState({ outputArray: OParray })
            this.setState({ j: change })
            this.changeGrid()
        }
        else if (e.keyCode == '38') {
            console.log('up');
            var OParray = this.state.outputArray;
            var change = this.state.i - 1
            OParray.push([change, this.state.j])
            this.setState({ outputArray: OParray })
            this.setState({ i: change })
            this.changeGrid()
        }
        else if (e.keyCode == '39') {
            console.log('right');
            var OParray = this.state.outputArray;
            var change = this.state.j + 1
            OParray.push([this.state.i, change])
            this.setState({ outputArray: OParray })
            this.setState({ j: change })
            this.changeGrid()
        }
        else if (e.keyCode == '40') {
            console.log('down');
            var OParray = this.state.outputArray;
            var change = this.state.i + 1
            OParray.push([change, this.state.j])
            this.setState({ outputArray: OParray })
            this.setState({ i: change })
            this.changeGrid()
        }
    }

    changeGrid = ()=> {
        var count = 0;
        var temp = [];
        var temp2 = [];
        for (let i = 0; i < this.state.n; i++) {
            for (let j = 0; j < this.state.n; j++) {
                count++;
                // console.log(i + ' ' + j)
                temp = {
                    boxArray: [i, j],
                    boxNumber: count,
                    selectedBox: (i === this.state.i && j === this.state.j) ? true : false
                }
                temp2.push(temp)
                // console.log(temp)
            }
        }
        // console.log(temp2)
        this.setState({ arrayObject: temp2 })
    }

    handleChange(e) {
        this.setState({ gridInput: e.target.value,outputArray: [] });
    }

    _submit = () => {
        this.setState({outputArray: [], i:0,j:0, n: parseInt(this.state.gridInput),  })
        this.changeGrid()
    }

    render() {
        return (
            <div className='main'>
                <div className='formContainer'>
                    <div>
                        <text>grid (n): </text>
                        <input
                            type="number"
                            value={this.state.gridInput}
                            onChange={this.handleChange} />
                    </div>
                    <div>
                        <text>No. of steps (m): </text>
                        <input
                            type="number"
                            value={this.state.numberOfGuests}
                        // onChange={this.handleInputChange}
                        />
                    </div>
                    <button onClick={this._submit}>Submit</button>
                </div>

                <table className='tableGrid'>
                    <tbody>
                        {[...Array(this.state.n + 1)].map((data, index) =>
                            <div style={{ display: 'flex', flexDirection: 'row' }} key={index}>
                                {this.state.arrayObject
                                    .slice(((this.state.n * index) - this.state.n), this.state.n * index).map((data, index) =>
                                        <div
                                            key={index}
                                            className='boxGrid'
                                            style={{
                                                backgroundColor: data.selectedBox === true ? 'yellow' : '#FFFFFF'
                                            }}
                                        >
                                            {data.boxNumber}
                                        </div>
                                    )}
                            </div>
                        )}
                    </tbody>
                </table>
                <text>OUTPUT: {JSON.stringify(this.state.outputArray)}</text>

            </div>
        )
    }
}
export default Dashboard;