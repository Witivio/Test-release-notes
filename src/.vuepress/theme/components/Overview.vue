<template>
  
  
    <main
      class="home"
      :aria-labelledby="data.heroText !== null ? 'main-title' : null"
    >
      
  
         <header class="hero">
            <div class="overview_hero_container">
              <div class="hero_image">
                    <img
                      v-if="data.heroImage"
                      :src="$withBase(data.heroImage)"
                      :alt="data.heroAlt || 'hero'"
                    >
                </div>  
                <div class="hero_text">
                  <div>
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
                
                  <p
                    v-if="data.actionText && data.actionLink"
                    class="action"
                  >
                    <NavLink
                      class="action-button"
                      :item="actionLink"
                    />
                  </p>
                </div>
            </div>
        </header>
  
      <div class="overview_container_items">
        <a
          v-for="(item, index) in data.items"
          :key="index"
          class="overview_container_item overview_wrap_range" 
          :href="item.link"
        >
          <div class="container_item_content">
            <h2 class="container_item_title">{{item.title}}</h2>
          </div>
          <div class="container_image">
            <img :src="item.itemImage">
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
  .container_item_content
    height 70px
  .overview_wrap_range
    flex-basis 10%
  .container_item_title
    font-size 1rem
    margin: 25px
  
  .container_item_description
    font-size 1rem
    margin: 25px
  
  .container_image
    height 70px
    display flex
    justify-content center
    align-items flex-start
    img
      height 50px
      padding 15px
  
  .overview_container_items
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items center
    justify-content center
  
  .overview_container_item 
    display flex
    flex-direction column
    height 150px
    margin 2.5rem
    border: 1px solid #eaecef
    border-radius: 5px
    transition-duration: 0.5s;
    justify-content: center;
  
  .overview_container_item:hover
    background-color: #903163
    color: white
    transition: all .2s
    cursor: pointer
    transform: scale(1.07) 

  .overview_hero_container
    display flex
    width 100%
    flex-direction row
    justify-content center
    max-width 80vw
    height 40vh

    .hero_text
      display flex
      flex-direction: column;
      align-content: center;
      width 40vw
      margin-left 10px
      margin-right 10px
  
  .image_index_documentaion
    height 150px
  
  
  .home
    width 100%
    margin 0px auto
    display block
    .hero
      opacity 1
      display flex
      flex-direction column
      align-items center
      justify-content flex-start
      border: 2px solid #eaecef
      img
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
    .features
      border-top 1px solid $borderColor
      padding 3.2rem 0
      margin-top 2.5rem
      display flex
      flex-wrap wrap
      align-items center
      align-content stretch
      justify-content center
   
  @media (max-width: $MQMobile)
    .overview_hero_container
      display flex
      flex-direction column
      align-items center
      h1
        font-size 2rem
    .overview_wrap_range
        flex-basis 85%
  @media (max-width: 1024px)
    .overview_hero_container
      display flex
      flex-direction column
      align-items center
    .home
      padding-left 1.5rem
      padding-right 1.5rem
      .hero
        img
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
      .feature
        h2
          font-size 1.25rem
  </style>