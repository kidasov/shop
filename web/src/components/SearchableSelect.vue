<template>
  <div class="dropdown">
    <input ref="dropdowninput" v-if="editMode" v-on:focus="handleOnFocus(true)" v-on:blur="handleOnFocus(false)" v-model.trim="inputValue" class="dropdown-input" type="text" placeholder="Search" />
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

  props: {
    items: Array,
    selected: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      inputValue: '',
      editMode: true,
      focused: false,
      selectedItem: this.selected,
      onSelect: () => {},
    };
  },

  mounted() {
    this.editMode = Object.keys(this.selectedItem).length === 0;
  },

  methods: {
    itemVisible(item) {
      let currentName = item.name.toLowerCase()
      let currentInput = this.inputValue.toLowerCase()
      return currentName.includes(currentInput);
    },

    handleOnFocus(focused) {
      this.focused = focused;
      if (!this.focused && this.selectedItem.id) {
        this.editMode = false;
      }
    },

    handleSelectItem(item) {
      this.selectedItem = item;
      this.editMode = false;
      this.inputValue = '';
      this.$emit('onSelect', item);
    },

    handleResetItem() {
      this.editMode = true;
      this.$nextTick(() => this.$refs.dropdowninput.focus());
      this.$emit('onReset')
    }
  }
}
</script>

<style scoped>
  .dropdown{
    position: relative;
    width: 100%;
    max-width: 400px;
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