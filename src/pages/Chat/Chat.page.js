import React, {Component} from "react";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/actions/getUserProfile.actions";
import {getContacts} from "../../redux/actions/getContacts.actions";
import './Chat.scss';
import ContactItem from "../../components/ContactItem/ContactItem";
import SubjectItem from "../../components/SubjectItem/SubjectItem";
import Loader from "../../components/Loader/Loader";


class ChatPage extends Component {


    componentDidMount() {
        this.props.fetchUserProfile();
        this.props.fetchContacts();
    }

    render() {

        const {fullName, email, image: imageUrl} = this.props.userProfile;
        const {contacts: userContacts, loading: contactsAreLoading} = this.props.userContacts;
        const {subjects: userSubjects, loading: subjectsAreLoading} = this.props.userSubjects;

        const contacts = userContacts.map((contact, index) => {
            return (
                <ContactItem key={index.toString()} name={contact.name} email={contact.email}/>
            )
        });

        let subjects = <p>Hola</p>
        if (userSubjects.length) {
            subjects = userSubjects[userSubjects.length - 1].data.map((subject, i) => {
                const snippet = subject[subject.length - 1].snippet;
                const name = subject[0].headers.subject;
                return <SubjectItem key={i.toString()} name={name} messagePreview={snippet}/>
            })
        }


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
                        <input type="text" placeholder="Buscar contacto" className="contacts__search-input"/>
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
                <main className="chat"></main>

            </div>
        );

    }
}

const mapStateToProps = state => {
    return {
        userProfile: state.user,
        userContacts: state.contacts,
        userSubjects: state.subjects,
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
