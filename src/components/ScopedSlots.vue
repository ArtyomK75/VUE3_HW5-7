<template>
  <ul>
    <slot :items="items"></slot>
  </ul>
</template>


<script>
  export default {
    name: 'ScopedSlots',
    data() {
      return {
        items: ['item1', 'item2', 'item3', 'item4'],
      }
    }
  };
</script>
