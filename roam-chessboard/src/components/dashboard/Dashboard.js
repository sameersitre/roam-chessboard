import React, { Component } from 'react'
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            n: 5,
            m: 8,
            gridInput: 5,
            arrayObject: [],
            selectedBox: 3,
            i: 0, j: 0,
            outputArray: [[0, 0]],
            stepsCount: 0
        }
        this._NChange = this._NChange.bind(this);
        this._MChange = this._MChange.bind(this);
    }

    componentDidMount() {
        this.changeGrid()
        window.addEventListener('keydown', this.checkKey)
    }

    checkKey = (e) => {
        const { n, i, j, stepsCount } = this.state
        e = e || window.event;
        if (e.keyCode == '37') {
            if (j - 1 >= 0) {
                console.log('left');
                var OParray = this.state.outputArray;
                var change = this.state.j - 1
                OParray.push([this.state.i, change])
                this.setState({ outputArray: OParray, j: change, stepsCount: stepsCount + 1 })
                // this.setState({ j: change })
                this.changeGrid()
            }

        }
        else if (e.keyCode == '38') {
            console.log('up');
            if (i - 1 >= 0) {
                var OParray = this.state.outputArray;
                var change = this.state.i - 1
                OParray.push([change, this.state.j])
                this.setState({ outputArray: OParray, i: change, stepsCount: stepsCount + 1 })
                // this.setState({ i: change })
                this.changeGrid()
            }

        }
        else if (e.keyCode == '39') {
            if (j + 1 < n) {
                console.log('right');
                var OParray = this.state.outputArray;
                var change = this.state.j + 1
                OParray.push([this.state.i, change])
                this.setState({ outputArray: OParray, j: change, stepsCount: stepsCount + 1 })
                // this.setState({ j: change })
                this.changeGrid()
            }

        }
        else if (e.keyCode == '40') {
            if (i + 1 < n) {
                console.log('down');
                var OParray = this.state.outputArray;
                var change = this.state.i + 1
                OParray.push([change, this.state.j])
                this.setState({ outputArray: OParray, i: change, stepsCount: stepsCount + 1 })
                // this.setState({ i: change })
                this.changeGrid()
            }

        }
    }

    changeGrid = () => {
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

    _NChange(e) {
        this.setState({ gridInput: e.target.value, outputArray: [] });
    }
    _MChange(e) {
        this.setState({ m: parseInt(e.target.value), outputArray: [] });
    }

    _submit = async () => {
        await window.addEventListener('keydown', this.checkKey)
        await this.setState({ outputArray: [], i: 0, j: 0, n: parseInt(this.state.gridInput),stepsCount:0 })
        await this.changeGrid()
    }
    _reset=()=>{
        window.location.reload()
    }

    render() {
        return (
            <div className='main'>
                <div className='formContainer'>
                    <div className='innerContainer' >
                        <text>grid (n):&nbsp;&nbsp;</text>
                        <input
                            type="number"
                            value={this.state.gridInput}
                            onChange={this._NChange} />
                    </div>
                    <div>
                        <text>No. of steps (m): </text>
                        <input
                            type="number"
                            value={this.state.m}
                            onChange={this._MChange}
                        />

                    </div>
                    <button onClick={this._submit} className='submitBtn'>Submit</button>
                </div>
                <text style={{ marginTop: '3rem' }}> &nbsp;{this.state.n + " X " + this.state.n}</text>
                <text  > &nbsp;{"No. of Steps: " + this.state.stepsCount}</text>
                <text style={{ fontSize: 12 }}>Block Traversed: {JSON.stringify(this.state.outputArray)}</text>
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

                {this.state.m === this.state.stepsCount
                    ?
                    (
                        window.removeEventListener('keydown', this.checkKey),
                        <div>
                            <text>OUTPUT: {JSON.stringify(this.state.outputArray)}</text>
                            <button onClick={this._reset} className='submitBtn' >RESET</button>
                        </div>

                    )
                    :
                    null
                }
                {/* <text>OUTPUT: {JSON.stringify(this.state.outputArray)}</text> */}
            </div>
        )
    }
}
export default Dashboard;