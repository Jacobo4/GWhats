import React, {Component} from "react";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/actions/getUserProfile.actions";
import {getContacts} from "../../redux/actions/getContacts.actions";
import './Chat.scss';
import ContactItem from "../../components/ContactItem/ContactItem";
import SubjectItem from "../../components/SubjectItem/SubjectItem";
import Loader from "../../components/Loader/Loader";
import MessageItem from "../../components/MessageItem/MessageItem";


class ChatPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchContactValue: ""
        }
    }

    componentDidMount() {
        this.props.fetchUserProfile();
        this.props.fetchContacts();
    }

    filterContacts = (btn) => {
        this.setState({ searchContactValue: btn.target.value });
    }


    render() {

        const {searchContactValue} = this.state;
        const {fullName, email, image: imageUrl} = this.props.userProfile;
        const {contacts: userContacts, loading: contactsAreLoading} = this.props.userContacts;
        const {subjects: userSubjects, loading: subjectsAreLoading} = this.props.userSubjects;
        const {messages: currentConversation, contactName: currentContactName} = this.props.userConversations.current;
        // const {messages: userMessages, loading: messagesAreLoading} = this.props.userMessages;

        const filteredContacts = userContacts.filter(contact => {
            return contact.name.toLowerCase().indexOf(searchContactValue.toLowerCase()) !== -1
                   || contact.email.toLowerCase().indexOf(searchContactValue.toLowerCase()) !== -1;
        });

        const contacts = filteredContacts.map((contact, index) => {
            return (
                <ContactItem key={index.toString()} name={contact.name} email={contact.email}/>
            )
        });

        let subjects = (
            <div className="SubjectItem SubjectItem--defaultMessage">
                <h3>¡Hola de nuevo 🤗!</h3>
            </div>
        )

        if (userSubjects.length) {
            //NOTE: subject = conversation
            subjects = userSubjects[userSubjects.length - 1].data.map((subject, i) => {
                const messagePreview = subject[subject.length - 1].snippet;
                const name = subject[0].headers.subject;
                return <SubjectItem key={i.toString()} name={name} messagePreview={messagePreview} messages={subject}/>
            });
        }

        let messages = (
            <p></p>
        );

        if (currentConversation.length) {
            messages = currentConversation.map((message, i) => {
                const body = message.textHtml || message.textPlain;
                const date = new Date(Date.parse(message.headers.date)).toLocaleString();
                const from = message.headers.from.includes(email) ? "me" : "them";

                return <MessageItem key={i.toString()} body={body} date={date} from={from}/>
            })
        }
        console.log(this.state)

        return (
            <div className="ChatPage">
                <aside>
                    <div className="profile">
                        <img className="profile__thumbnail" src={imageUrl} alt={fullName + " thumbnail"}></img>
                        <div className="profile__name-wrapper">
                            <h5 className="profile__name">{fullName}</h5>
                            <h6 className="profile__email">{email}</h6>
                        </div>
                    </div>
                    <div className="contacts-search">
                        <input type="text" placeholder="Buscar contacto" className="contacts__search-input"
                               onChange={(btn) => this.filterContacts(btn)}/>
                    </div>
                    <ul className="contacts">
                        {contactsAreLoading ? <Loader/> : contacts}
                    </ul>
                </aside>

                <aside className="subjects">
                    <h2 className="subjects__title">Asuntos</h2>
                    <ul className="subjects__wrapper">
                        {subjectsAreLoading ? <Loader/> : subjects}
                    </ul>
                </aside>
                <main className="chat">
                    <h3 className="chat__title">{currentContactName}</h3>
                    <div className="chat__wrapper">
                        <ul className="chat__messages">
                            {messages}
                        </ul>
                    </div>
                    {/*<div className="chat-inputBox">*/}
                    {/*    <input type="text" className="chat-inputBox__input"/>*/}
                    {/*    <div className="chat-inputBox__actions">*/}
                    {/*        <button className="chat-inputBox__action">1</button>*/}
                    {/*        <button className="chat-inputBox__action">2</button>*/}
                    {/*        <button className="chat-inputBox__action">3</button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </main>

            </div>
        );

    }
}

const mapStateToProps = state => {
    //NOTE: I could let the same name in every property, but use the "user" prefix to difference between component and store props
    return {
        userProfile: state.user,
        userContacts: state.contacts,
        userSubjects: state.subjects,
        userConversations: state.conversations,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUserProfile: () => dispatch(getUserProfile()),
        fetchContacts: () => dispatch(getContacts()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatPage)
