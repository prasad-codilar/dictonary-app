import React, { Component } from 'react';
import '../Components/dictonary.css';

class dictonary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            inputValue: "",
            myurl: "",

        };
    }
    // fetchh = (e) => {
    //     e.preventDefault()
    //     this.setState({
    //         myurl: `https://api.dictionaryapi.dev/api/v2/entries/en/${this.state.inputValue}`,
    //     })
    // }



    input = (event) => {
        this.setState({
            inputValue: event.target.value,

        });

    }

    fetchh = (e) => {
        e.preventDefault();
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${this.state.inputValue}`)
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                })

            })

    }



    render() {
        console.log(this.state)

        return (
            <>
                <h1>Dictonary App</h1>
                <div className="input">
                    <form >
                        <input type="text" placeholder='Search for a word' onChange={this.input} />
                        <button onClick={this.fetchh}>Search</button>
                    </form>
                </div>
                <div className="dictonary-data">




                    {this.state.items.map((n, i) => {
                        return (
                            <table>
                                <th key={i}><img src="images/speaker.svg " width={20} alt="" onClick={() => { new Audio(n.phonetics[0].audio).play() }} /><span><h3>{n.word}</h3></span><br />

                                    <td key={i}>/'{n.phonetic}/</td>
                                    <br />
                                    <td className='th' key={i}>{n.meanings[0].partOfSpeech}</td><br />
                                    <td key={i}>{n.meanings[0].definitions[0].definition}</td><br />
                                    <td key={i}>"{n.meanings[0].definitions[0].example}"</td>
                                    <br />
                                    <td key={i}>Similar:{n.meanings[0].definitions[0].synonyms.map((e) => {
                                        return (
                                            <span className='syno'>{e},</span>)
                                    })}</td>
                                    <br />





                                </th>
                            </table>

                        )
                    })}





                </div>
            </>
        );
    }
}


export default dictonary; 