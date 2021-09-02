import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const deleteCollections = (collection, id) => {
  const error = ref(null);

  let docRef = projectFirestore.collection(collection).doc(id);
  const deleteDoc = async () => {
    error.value = null;
    try {
      const res = await docRef.delete();
    } catch (error) {
      console.log(err.message);
      error.value = "could not delete the doccument";
    }
  };

  const updateDoc = async (updates) => {
    alert();
    error.value = null;
    try {
      const res = await docRef.update(updates);
      return res;
    } catch (error) {
      console.log(err.message);
      error.value = "could not update the doccument";
    }
  };
  return { error, deleteDoc, updateDoc };
};

export default deleteCollections;
