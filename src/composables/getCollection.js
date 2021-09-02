import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const getCollections = (collection) => {
  const posts = ref([]);
  const error = ref(null);

  let allCollection = projectFirestore
    .collection(collection)
    .orderBy("createdAt");

  allCollection.onSnapshot(
    (snap) => {
      let results = [];
      snap.docs.forEach((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });
      posts.value = results;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      posts.value = [];
      error.value = "could not fetch the data";
    }
  );

  return { posts, error };
};

export default getCollections;
