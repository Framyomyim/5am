import db from '@/db.js';

const Auth = (type, user_hash = null) => {
    if(type === 'login') {
        Login(user_hash);
    } else if(type === 'register') {
        Register(user_hash);
    } else if(type === 'logout') {
        Logout();
    }
}

const Login = (user_hash) => {
    db.collection('users').where('key_id', '==', user_hash).limit(1)
        .get()
        .then(querySnapshot => {
            let result = querySnapshot.docs.length === 1 ? true : false;
            if(result) {
                db.collection('users').doc(querySnapshot.docs[0].id).update({
                    timestamp: Date.now()
                }).then(() => {
                    alert('Success');
                    let userDocId = querySnapshot.docs[0].id;
                    localStorage.setItem('logged_in', userDocId);
                    window.location.reload();
                });
            } else {
                alert('Failed');
            }
        });
};

const Register = (user_hash) => {
    db.collection('users').where('key_id', '==', user_hash).limit(1)
        .get()
        .then(querySnapshot => {
            let result = querySnapshot.docs.length === 1 ? true : false;
            if(result) {
                alert('Your user hash is already used');
            } else {
                db.collection('users').add({
                    bio: 'Your BIO',
                    key_id: user_hash,
                    nickname: 'Alex Changer',
                    profile: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/768px-User_icon_2.svg.png',
                    timestamp: Date.now()
                }).then(docRef => {
                    alert('Success');
                    localStorage.setItem('logged_in', docRef.id);
                    window.location.href = '/';
                });
            }
        });
};

const Logout = () => {

};

export default Auth;