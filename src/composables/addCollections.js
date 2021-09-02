import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const addCollections = (collection) => {
  const error = ref(null);

  const addDoc = async (doc) => {
    error.value = null;

    try {
      const res = await projectFirestore.collection(collection).add(doc);
      return res;
    } catch (err) {
      console.log(err.message);
      error.value = "could not add the data";
    }
  };

  return { error, addDoc };
};

export default addCollections;
