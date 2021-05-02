import React, {Component} from "react";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/actions/getUserProfile.actions";
import {getContacts} from "../../redux/actions/getContacts.actions";
import './Chat.scss';
import ContactItem from "../../components/ContactItem/ContactItem";
import SubjectItem from "../../components/SubjectItem/SubjectItem";


class ChatPage extends Component {
    componentDidMount() {
        this.props.fetchUserProfile();
        this.props.fetchContacts();
    }

    render() {

        const {fullName, email, image: imageUrl} = this.props.userProfile;
        const {contacts: userContacts} = this.props.userContacts;

        const contacts = userContacts.map((contact, i) =>{
            return <ContactItem key={i.toString()} name={contact.name} email={contact.email}/>
        });
        const subjects = [];


        for (let i = 0; i <= 20; i++) {
            subjects.push(<SubjectItem key={i.toString()} name={`Asunto ${i}`} messagePreview={`Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book.`}/>)
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
                        {contacts}
                    </ul>
                </aside>

                <aside className="subjects">
                    <h2 className="subjects__title">Asuntos</h2>
                    <ul className="subjects__wrapper">
                        {subjects}
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
        userContacts: state.contacts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUserProfile: () => dispatch(getUserProfile()),
        fetchContacts: () => dispatch(getContacts())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatPage)
