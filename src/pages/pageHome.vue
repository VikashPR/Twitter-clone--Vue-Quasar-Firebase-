<template>
  <q-page class='relative-position'>
    <q-scroll-area class="absolute full-height full-width">
      <!-- NOTE tweet Form  -->
      <div class="q-py-lg q-px-lg row items-end q-col-gutter-lg">
        <div class="col">
          <q-input class="newTweet" autogrow bottom-slots v-model="newTweetContent" placeholder="What u got today?!"
            counter maxlength="250">
            <template v-slot:before>
              <q-avatar size='xl'>
                <img src="https://data.whicdn.com/images/344552644/original.jpg">
              </q-avatar>
            </template>
          </q-input>
        </div>
        <div class="col col-shrink">
          <q-btn @click="addNewTweet" class='q-mb-lg' :disable='!newTweetContent' push unelevated rounded
            color="primary" no-caps label="Tweet" />
        </div>
      </div>

      <q-separator class='divider' size='10px' color="grey-2" />


      <!-- NOTE Tweet list -->
      <q-list separator>

        <transition-group appear enter-active-class="animated fadeIn slow"
          leave-active-class="animated fadeOut slow">
          <q-item class='q-py-lg' :key="tweet.id" v-for="tweet in tweets">

            <q-item-section top avatar>
              <q-avatar size='xl'>
                <img src="https://data.whicdn.com/images/344552644/original.jpg">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class='text-h6'><strong>Taylor swift</strong>
                <span class="text-grey-7">@vikash2806 <br class="lt-md">&bull;{{tweet.date}}</span>
              </q-item-label>
              <q-item-label class='tweet-content'>
                <span class="text-weight-bold">Janet</span>
                {{tweet.content}}
              </q-item-label>
              <div class="row justify-between q-mt-sm tweet-icon">
                <q-btn flat round color="grey" size="md" icon="far fa-comment-alt" />
                <q-btn flat round color="grey" size="md" icon="fas fa-retweet" />
                <q-btn flat round @click="toggleLike(tweet)" :color="tweet.liked ? 'pink':'grey'" size="md"
                  :icon="tweet.liked ?'fas fa-heart' : 'far fa-heart'" />
                <q-btn @click='deleteTweet(tweet)' flat round color="grey" size="md" icon="fas fa-trash" />
              </div>
            </q-item-section>
          </q-item>
        </transition-group>
      </q-list>
    </q-scroll-area>
  </q-page>

</template>

<script>
  import {
    defineComponent
  } from 'vue'

  import {
    db
  } from 'src/boot/firebase'

  export default defineComponent({
    name: 'PageHome',
    data() {
      return {
        newTweetContent: '',
        tweets: [],
      }
    },
    methods: {
      addNewTweet() {
        let newTweet = {
          content: this.newTweetContent,
          date: Date.now(),
          liked: false,
        }
        // Add a new document with a generated id.
        db.collection("tweet").add(newTweet).then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });

        this.newTweetContent = ''
      },
      deleteTweet(tweet) {
        db.collection("tweet").doc(tweet.id).delete().then(() => {
          console.log("Document successfully deleted!");
        }).catch((error) => {
          console.error("Error removing document: ", error);
        });
      },
      toggleLike(tweet) {
        // Set the "capital" field of the city 'DC'
        return db.collection("tweet").doc(tweet.id).update({
            liked: !tweet.liked,
          })
          .then(() => {
            console.log("Document successfully updated!");
          })
          .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
          });
      }
    },
    mounted() {
      db.collection("tweet").orderBy('date').onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          let tweeetChange = change.doc.data()
          tweeetChange.id = change.doc.id;
          if (change.type === "added") {
            this.tweets.unshift(tweeetChange);
          }
          if (change.type === "modified") {
            console.log("Modified tweet: ", tweeetChange);
            let index = this.tweets.findIndex(tweet => tweet.id === tweeetChange.id);
            Object.assign(this.tweets[index], tweeetChange);

          }
          if (change.type === "removed") {
            console.log("Removed tweet: ", tweeetChange);
            let index = this.tweets.findIndex(tweet => tweet.id === tweeetChange.id);
            console.log("index", index);
            this.tweets.splice(index, 1);
          }
        });
      });
    }
  })

</script>

<style scoped lang="scss">
  .newTweet {
    line-height: 1.4 !important;
    font-size: 19px;
  }

  .divider {
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-color: $grey-4;
  }

  .tweet-content {
    font-size: 16px;
    line-height: 1.4 !important;
  }

  .tweet-icon {
    margin-left: -10px;
  }

</style>
