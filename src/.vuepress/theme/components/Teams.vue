<template>
  
  
    <main
      class="home"
      :aria-labelledby="data.heroText !== null ? 'main-title' : null"
    >
      
  
         <header class="teams_hero">
            <div class="teams_hero_container">
              
                <div class="teams_hero_text">
                    <p
                      v-if="data.tagline !== null"
                      class="overview_description"
                    >
                      {{ data.tagline || 'Welcome to your VuePress site' }}
                    </p>
                    <p
                        v-if="data.tagline !== null"
                        class="description"
                      >
                        {{ "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus placeat quos recusandae nemo temporibus ullam adipisci ipsum blanditiis hic, praesentium animi in excepturi iure, laborum eos unde tempore! Dicta, perferendis." || 'Welcome to your VuePress site' }}
                    </p>
                  </div>
                  <div class="teams_hero_content">
                    <img
                      v-if="data.heroImage"
                      :src="$withBase(data.heroImage)"
                      :alt="data.heroAlt || 'hero'"
                      class="teams_img"
                    >
                </div>  
            </div>
        </header>
  
      <div class="container_items">
        <a
          v-for="(item, index) in data.items"
          :key="index"
          class="teams_container_item overview_wrap_range" 
          :href="item.link"
        >
          <div class="teams_container_item_content">
            <h2 class="teams_container_item_title">{{item.title}}</h2>
          </div>
          <div class="container_image">
            <img :src="item.itemImage" class="teams_img">
          </div>
        </a>
      </div>
  
    </main>
  </template>
  
  <script>
  import NavLink from '@theme/components/NavLink.vue'
  
  
  
  export default {
    name: 'Overview',
    components: { NavLink },
    computed: {
      data () {
        return this.$page.frontmatter
      },
      actionLink () {
        return {
          link: this.data.actionLink,
          text: this.data.actionText
        }
      }
    }
  }
  </script>
  
  <style lang="stylus">
  .teams_hero_content
    display flex
    flex-direction column
    justify-content space-around
    align-items center
    height auto
  .teams_container_item_content
    height 54px
 
  .teams_container_item_title
    font-size 1rem
    margin-top: 15px
    margin-left: 25px
    margin-right: 25px
  
  .container_item_description
    font-size 1rem
    margin: 25px
    
  .container_image
    height 70px
    display flex
    justify-content center
    align-items flex-start
    .teams_img
      height 50px
      padding 15px
  
  .teams_container_item 
    display flex
    flex-direction column
    height 150px
    margin 1.5rem
    border: 1px solid #eaecef
    border-radius: 5px
    transition-duration: 0.5s;
    justify-content flex-start
  
  .teams_container_item:hover
    transition: all .2s
    cursor: pointer
    box-shadow: rgb(144, 49, 99) 2px 2px 6px 0px , rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;

  .teams_hero_container
    display flex
    width 100%
    flex-direction row
    justify-content center
    max-width 80vw
    height auto

    .teams_hero_text
      display flex
      flex-direction: column;
      justify-content: center
      margin-left 10px
      margin-right 10px
  
  
  .home
    width 100%
    margin 0px auto
    display block
    .teams_hero
      opacity 1
      display flex
      flex-direction column
      align-items center
      justify-content flex-start
      border: 2px solid #eaecef
      background-color rgba(234, 236, 239, 0.15)
      .teams_img
        display block
        margin 3rem auto 1.5rem
      h1
        font-size 3rem
      h1, .overview_description, .action
        margin 1.8rem auto
      .overview_description
        max-width 35rem
        font-size 1.2rem
        line-height 1.3
        color $accentColor
        font-weight bold
      .action-button
        display inline-block
        font-size 1.2rem
        color #fff
        background-color $accentColor
        padding 0.8rem 1.6rem
        border-radius 4px
        transition background-color .1s ease
        box-sizing border-box
        border-bottom 1px solid darken($accentColor, 10%)
        &:hover
          background-color lighten($accentColor, 10%)
   
  @media (max-width: $MQMobile)
    .teams_hero_container
      display flex
      flex-direction column-reverse
      align-items center
      height auto
      h1
        font-size 2rem
  @media (max-width: 1024px)
    .teams_hero_container
      display flex
      flex-direction column-reverse
      align-items center
      height auto
    .home
      padding-left 1.5rem
      padding-right 1.5rem
      .teams_hero
        .teams_img
          max-height 210px
          margin 2rem auto 1.2rem
        h1
          font-size 1.5rem
        h1, .overview_description, .action
          margin 1.2rem auto
        .overview_description
          font-size 1.2rem
        .action-button
          font-size 1rem
          padding 0.6rem 1.2rem
  </style>