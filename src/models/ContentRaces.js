export default function firebaseContent(id,data) {
    id = id ?? '';
    data = data ?? {};

    return {
        id: id,
    }
}