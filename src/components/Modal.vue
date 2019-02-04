<template>	
 <transition name="modal-fade">	
	<div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <h3>
          <slot name="header"> 
          </slot>
        </h3>
      </header>
      <section class="modal-body">
        <slot name="body">         
        </slot>
       </section>
       <footer class="modal-footer">
          <slot name="footer">        

            <button
              type="button"
              class="btn"
              @click="close"
            >
            Ок
          </button>
        </slot>
      </footer>
    </div>
  </div>
</transition>
</template>

<script> 
	export default {
    name: 'modal',

    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<style lang="scss"  scoped>
	@import "../assets/styles/index.scss";

	.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;  
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;   
    width: 400px;
  }

  .modal-header,
  .modal-footer {   
    display: flex;
  }

  .modal-header {     
    color: black;
    justify-content: space-between;
    font-family: 'Roboto', serif;
    padding:35px;
    h3{
      margin:auto;
    }
  }

  .modal-footer {   
    justify-content: flex-end;
    font-family: 'Roboto', serif;
  }

  .modal-body {
    position: relative;
    padding: 0 20px;
    font-family: 'Roboto', serif;
  }

  .btn {
    color: white;
    background: $main_color;
    border:none;
    padding:10px 40px;
    font-family: 'Roboto', serif;
    margin: 30px;
   
  }
  .btn:hover{
    background-color:$main_color_hover;
    transition: 0.4s;
  }
  .btn:not(:hover) {    
        transition: 0.4s;
    }
  .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease
  }
  @media screen and (max-width: 430px) {
    .modal {
      width: 350px;
    }
  }
   @media screen and (max-width: 375px) {
    .modal {
      width: 300px;
    }
  }
	
</style>