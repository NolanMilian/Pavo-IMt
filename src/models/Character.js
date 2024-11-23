import firebase from "firebase";

export default function Character(id, data) {
  id = id ?? '';
  data = data ?? {};

  return {
    id: id,
    name: data.name ?? '',
    creationDate: data.creationDate ?? firebase.firestore.FieldValue.serverTimestamp(),
    updateDate: firebase.firestore.FieldValue.serverTimestamp(),
  }
}
