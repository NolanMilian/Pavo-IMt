export default function AuthUser(firebaseUser) {
  let m = {
    displayName: '',
    email: '',
    photoURL: '',
    uid: '',
  }

  if (firebaseUser){
    m.displayName = firebaseUser.displayName ? firebaseUser.displayName : '';
    m.email = firebaseUser.email ? firebaseUser.email : '';
    m.photoURL = firebaseUser.photoURL ? firebaseUser.photoURL : '';
    m.uid = firebaseUser.uid ? firebaseUser.uid : '';
  }

  return m;
}
