<template>
  <q-page>
    <div class="q-py-lg q-px-lg row items-end q-col-gutter-lg">
      <div class="col">
        <q-input class="newTweet" autogrow bottom-slots v-model="newTweet" placeholder="What's up for today ?!" counter
          maxlength="250">
          <template v-slot:before>
            <q-avatar size='xl'>
              <img src="https://data.whicdn.com/images/344552644/original.jpg">
            </q-avatar>
          </template>
        </q-input>
      </div>
      <div class="col col-shrink">
        <q-btn class='q-mb-lg' :disable='!newTweet' push unelevated rounded color="primary" no-caps label="Tweet" />
      </div>
    </div>
    <q-separator class='divider' size='10px' color="grey-2" />



    <q-list>
      <q-item class='q-py-lg'>
        <q-item-section top avatar>
          <q-avatar size='xl'>
            <img src="https://data.whicdn.com/images/344552644/original.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class='text-h6'><strong>Taylor swift</strong> <span class="text-grey-7">@vikash2806</span>
          </q-item-label>
          <q-item-label class='tweet-content'>
            <span class="text-weight-bold">Janet</span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita libero dolor velit et, aliquam sequi
            eligendi.
            
            officia nisi tempore pariatur maxime, corporis ducimus. Alias ullam nobis aliquam reiciendis
            repellat doloribus quae atque quasi, vitae excepturi dolore exercitationem ipsum distinctio odio obcaecati
            inventore eveniet id consectetur. Voluptate labore esse sit? Inventore.
            Id, modi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, error.
          </q-item-label>
          <div class="row justify-between q-mt-sm tweet-icon">
            <q-btn flat round color="grey" size="md" icon="far fa-comment-alt" />
            <q-btn flat round color="grey" size="md" icon="fas fa-retweet" />
            <q-btn flat round color="grey" size="md" icon="far fa-heart" />
            <q-btn flat round color="grey" size="md" icon="fas fa-trash" />
          </div>
        </q-item-section>

        <q-item-section side top>
          1 min ago
        </q-item-section>
      </q-item>

    </q-list>
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
        newTweet: '',
      }
    }
  })

</script>

<style scoped lang="scss">
.newTweet{
    line-height:1.4 !important;
    font-size: 19px;
  }

  .divider {
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-color: $grey-4;
  }

  .tweet-content {
    font-size: 16px;
    line-height:1.4 !important;
  }

  .tweet-icon {
    margin-left: -10px;
  }

</style>
