<template>
  <div class="dropdown">
    <input ref="dropdowninput" v-if="Object.keys(selectedItem).length === 0" v-on:focus="handleOnFocus(true)" v-on:blur="handleOnFocus(false)" v-model.trim="inputValue" class="dropdown-input" type="text" placeholder="Search" />
    <div v-else @click="handleResetItem" class="dropdown-selected">
      {{selectedItem.name}}
    </div>
    <div v-show="inputValue || focused" class="dropdown-list">
      <div @mousedown="handleSelectItem(item)"  v-show="itemVisible(item)" v-for="item in items" :key="item.name" class="dropdown-item">
        {{item.name}}  
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchableSelect',

  data() {
    return {
      inputValue: '',
      items: [],
      selectedItem: {},
      focused: false,
    };
  },

  mounted() {
    this.items = [
      { id: 1, name: 'Russian' },
      { id: 2, name: 'English' }
    ];
  },

  methods: {
    itemVisible(item) {
      let currentName = item.name.toLowerCase()
      let currentInput = this.inputValue.toLowerCase()
      return currentName.includes(currentInput);
    },

    handleOnFocus(focused) {
      this.focused = focused;
    },

    handleSelectItem(item) {
      this.selectedItem = item;
      this.inputValue = '';
    },

    handleResetItem() {
      this.selectedItem = {};
      this.$nextTick( () => this.$refs.dropdowninput.focus() );
      this.$emit('onResetItem')
    }
  }
}
</script>

<style scoped>
  .dropdown{
    position: relative;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }
  .dropdown-input, .dropdown-selected{
    width: 100%;
    padding: 10px 16px;
    border: 1px solid transparent;
    background: #edf2f7;
    line-height: 1.5em;
    outline: none;
    border-radius: 8px;
  }
  .dropdown-input:focus, .dropdown-selected:hover{
    background: #fff;
    border-color: #e2e8f0;
  }
  .dropdown-input::placeholder{
    opacity: 0.7;
  }
  .dropdown-selected{
    font-weight: bold;
    cursor: pointer;
  }
  .dropdown-list{
    position: absolute;
    width: 100%;
    max-height: 500px;
    background: #ffffff;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
  }
  .dropdown-item{
    display: flex;
    width: 100%;
    padding: 11px 16px;
    cursor: pointer;
  }
  .dropdown-item:hover{
    background: #edf2f7;
  }
  .dropdown-item-flag{
    max-width: 24px;
    max-height: 18px;
    margin: auto 12px auto 0px;
  }
</style>