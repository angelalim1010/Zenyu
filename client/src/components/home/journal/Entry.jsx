import React, { Component } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-react";
import { createJournal,  createMood  } from "../../../actions/journalPrompts";
import { uploadImage  } from "../../../actions/imageActions";

import {Redirect, withRouter} from 'react-router-dom';
import Navigation from '../Navigation';

import "../../style/Entry.css"
import '../../style/style.css';

const moodIds={
    sad: "148f355c-f251-49ec-9f9d-48b8c815bfbd",
    nervous: "687b7a61-ac4a-4a64-a5b6-a2aed74596e1",
    happy: "879632eb-6b57-49bf-a243-c315bc6db398",
    calm: "9c2f2373-9d69-4abd-a5ed-b419695c4376"
}
class Entry extends Component{
	constructor(props){
		super(props);
		this.state={
			prompt: this.props.location.aboutProps || {},
			content: "",
			value: "",
			redirect: false,
			selectedFile: null,
			base64TextString: ""
		}
		this.handleSelect = this.handleSelect.bind(this);
		this.onChangeHandler = this.onChangeHandler.bind(this);
	}


	handleSelect = async(e) =>{
		e.preventDefault();
		this.setState({
			value: e.target.value
		})
	}

	onChangeHandler = e =>{
		console.log(e.target.files[0])
		// this.setState({
		// 	selectedFile: e.target.files[0],
		// 	loaded: 0
		// })
		let file = e.target.files[0]
		if (file){
			const reader = new FileReader();
			reader.onload = this._handleReaderLoaded.bind(this);
			reader.readAsBinaryString(file)
		}

	}
	_handleReaderLoaded = (readerEvt) =>{
		let binaryString = readerEvt.target.result
		this.setState({
			base64TextString: "data:image/png;base64,"+ btoa(binaryString)
		})
		console.log("data:image/png;base64,"+this.state.base64TextString)
	}
	render(){
		console.log(this.state.value)
		console.log(this.state.prompt)
		console.log(this.state.prompt.prompt.id)
		console.log(this.state.prompt.prompt.content)

		return(
		  <div>
		    <Navigation />
			<Container className="JournalEntry" fluid>
			  <Col className="wrapper">
				  <Col className="text-center" md="auto">
				  	<h1> Journal Entry </h1>
					<h5>Prompt: {this.state.prompt.prompt.content}</h5>
					<input type="file" onChange={this.onChangeHandler}/>
					<Form onSubmit={(e)=>{e.preventDefault();createMood(this.state.value); createJournal(this.state.content, this.state.prompt.prompt.id); 	uploadImage(this.state.base64TextString);this.props.history.push('/home')}}>
					  <Form.Row>
					    <Form.Control as="select" defaultValue="" onChange={this.handleSelect}>
						  <option value="" disabled>Select a Mood</option>
						  <option value={moodIds.happy}>Happy</option>
						  <option value={moodIds.calm}>Calm</option>
						  <option value={moodIds.sad}>Sad</option>
						  <option value={moodIds.nervous}>Nervous</option>
					    </Form.Control>
					  </Form.Row>
				      <CKEditor
					    editor={ClassicEditor}
					    data = {this.state.content}

            		    onChange={ ( event, editor ) => {
					      const data = editor.getData();
					      this.setState({
				            content: data
					      })
					    console.log( { event, editor, data } );
					    console.log(this.state.content)
					    }}
					  />
					  <Button type="submit" className= "btn btn-subjourn">Submit</Button>
				    </Form>
				  </Col>
			  </Col>
			</Container>
		  </div>
		)
	}
		
		
}
export default Entry