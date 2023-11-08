import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      memories: [
        {
          id: "m1",
          img: "https://en.wikipedia.org/wiki/Mountain#/media/File:Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg",
          title: "A trip into the mountains",
          description: "I enjoyed the trip",
        },
        {
          id: "m2",
          img: "https://en.wikipedia.org/wiki/Mountain#/media/File:Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg",

          title: "Surfing the sea side",
          description: "Enjoyed the breeze",
        },
        {
          id: "m3",
          img: "https://en.wikipedia.org/wiki/Mountain#/media/File:Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg",

          title: "Good eating",
          description: "The food is just on point",
        },
      ],
    };
  },
  getters: {
    memories(state) {
      return state.memories;
    },
    memory(state){
        return (memoryId) => {
            return state.memories.find(memory => memory.id === memoryId);
        };
    }
  },
});

export default store;
