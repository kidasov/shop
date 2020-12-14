<template>
  <div>
    <div
      :class="show ? 'visible' : 'invisible'"
      class="navigation"
      v-click-outside="outside"
      @click="inside"
    >
      <span>Menu</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },

  methods: {
    inside() {
      this.show = true;
    },
    outside() {
      this.show = false;
    },
  },

  directives: {
    "click-outside": {
      bind: function(el, binding, vNode) {
        // Provided expression must evaluate to a function.
        if (typeof binding.value !== "function") {
          const compName = vNode.context.name;
          let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`;
          if (compName) {
            warn += `Found in component '${compName}'`;
          }

          console.warn(warn);
        }
        // Define Handler and cache it on the element
        const bubble = binding.modifiers.bubble;
        const handler = (e) => {
          if (bubble || (!el.contains(e.target) && el !== e.target)) {
            binding.value(e);
          }
        };
        el.__vueClickOutside__ = handler;

        // add Event Listeners
        document.addEventListener("click", handler);
      },

      unbind: function(el) {
        // Remove Event Listeners
        document.removeEventListener("click", el.__vueClickOutside__);
        el.__vueClickOutside__ = null;
      },
    },
  },
};
</script>

<style scoped>
.wrapper {
  position: relative;
}

.navigation {
  width: 280px;
  background-color: #fff;
  bottom: 0;
  color: #000;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  position: absolute;
  z-index: 990;
  will-change: visibility;
  visibility: visible;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    visibility 0s linear 0.25s;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.28);
}

.visible {
  transform: translateX(0);
  visibility: visible;
}

.invisible {
  transform: translateX(-280px);
  visibility: hidden;
}
</style>
