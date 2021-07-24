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
    <q-separator class='divider' size='10px' color="grey-2"/>
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

<style scoped lang='scss'>
  .newTweet {
    font-size: 19px;
  }
.divider{
  border-top: 1px solid;
  border-bottom: 1px solid ;
  border-color: $grey-4;
}
</style>
