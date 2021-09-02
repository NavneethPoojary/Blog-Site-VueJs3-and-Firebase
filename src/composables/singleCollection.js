import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const singleCollection = (collection, id) => {
  const post = ref(null);
  const error = ref(null);

  let oneCollection = projectFirestore.collection(collection).doc(id);

  oneCollection.onSnapshot(
    (snap) => {
      if (snap.data()) {
        post.value = { ...snap.data(), id: snap.id };
        error.value = null;
      } else {
        error.value = "that document does not exists";
      }
    },
    (err) => {
      console.log(err.message);
      error.value = "could not fetch the data";
    }
  );

  return { error, post };
};

export default singleCollection;
