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

      <transition-group appear enter-active-class="animated fadeInDown slow"
        leave-active-class="animated fadeOutUp slow">
        <q-item class='q-py-lg' :key="tweet.date" v-for="tweet in tweets">

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
              <q-btn flat round color="grey" size="md" icon="far fa-heart" />
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
  } from 'vue';


  export default defineComponent({
    name: 'PageHome',
    data() {
      return {
        newTweetContent: '',
        tweets: [{
            content: "A for apple ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita libero dolor velit et, aliquam sequieligendi.",
            date: 1627204391216,
          },
          {
            content: "B for ball ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita libero dolor velit et, aliquam sequieligendi.",
            date: 1627204419557
          }
        ],
      }
    },
    methods: {
      addNewTweet() {
        let newTweet = {
          content: this.newTweetContent,
          date: Date.now(),
        }
        this.tweets.unshift(newTweet);
        this.newTweetContent = ''
      },
      deleteTweet(tweet) {
        let dateToDelete = tweet.date;
        let index = this.tweets.findIndex(tweet => tweet.date === dateToDelete);
        console.log("index", index);
        this.tweets.splice(index, 1);
      }
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
