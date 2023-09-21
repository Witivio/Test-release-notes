<template>
  
  
    <main
      class="home"
      :aria-labelledby="data.heroText !== null ? 'main-title' : null"
    >
      
  
  
        <header class="hero">
            <div class="hero_container">
                <div class="hero_image">
                    <img
                      v-if="data.heroImage"
                      :src="$withBase(data.heroImage)"
                      :alt="data.heroAlt || 'hero'"
                      class="home_img"
                    >
                </div>  

                <div class="hero_text">
                  <div>
                    <p
                      v-if="data.tagline !== null"
                      class="description_title"
                    >
                      {{ data.tagTitle || 'Welcome to your VuePress site' }}
                    </p>
                    <p
                      v-if="data.tagline !== null"
                      class="description"
                    >
                      {{ data.tagline || 'Welcome to your VuePress site' }}
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
  
      <div class="container_items">
        <a
          v-for="(item, index) in data.items"
          :key="index"
          class="container_item wrap_range" 
          :href="item.link"
        >
          <div>
            <div class="container_image">
              <img :src="item.itemImage" class="home_img">
            </div>
            <h2 class="container_item_title"></h2>
            <p class="container_item_description">{{ item.itemDescription }}</p>
          </div>
        </a>
      </div>
      
  
      <Content class="theme-default-content custom" />
      
     
  
      <div
        v-if="data.footer"
        class="footer"
      >
        {{ data.footer }}
      </div>
  
    </main>
  </template>
  
  <script>
  import NavLink from '@theme/components/NavLink.vue'
  
  
  
  export default {
    name: 'Home',
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
  .wrap_range
    flex-basis 35%
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
    .home_img
      height 50px
      padding 15px
  
  .container_items
    padding 3.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items center
    justify-content center
  
  .container_item 
    display flex
    flex-direction column
    justify-content center
    height clamp(200px, 20vw, 250px)
    margin 2.5rem
    border: 1px solid #eaecef
    border-radius: 5px
    transition-duration: 0.5s;
  
  .container_item:hover
    transition: all .2s
    cursor: pointer
    transform scale(1.05)
    box-shadow: rgb(144, 49, 99) 2px 2px 6px 0px , rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset; 

  .hero_container
    display flex
    width 100%
    flex-direction row
    justify-content space-evenly
    margin-top: 4em

  .hero_text
    display flex
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    width 40vw
    margin-left 10px
    margin-right 10px

  
  // $homePageWidth
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
      background-color rgba(234, 236, 239, 0.15)
      .home_img
        display block
        margin 3rem auto 1.5rem
      h1
        font-size 3rem
      h1, .description, .action, .description_title
        margin 1.8rem auto
      .description
        max-width 35rem
        font-size 1.0rem
        line-height 1.0
        color $accentColor
        opacity 0.9
      .description_title
        max-width 35rem
        font-size 1.6rem
        font-weight bold
        line-height 1.3
        color $accentColor
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
    .footer
      padding 2.5rem
      border-top 1px solid $borderColor
      text-align center
      color white
      background-color #202020
  @media (max-width: $MQMobile)
    .hero_container
      display flex
      flex-direction column
      align-items center
      width 100%
      h1
        font-size 2rem
    .hero_text
      width 90vw
    .hero_image 
      width 80vw 
    .wrap_range
        flex-basis 85%
  @media (max-width: 1024px)
    .hero_container
      display flex
      flex-direction column
      align-items center
      width 100%
    .hero_text
      width 90vw
    .hero_image 
      width 80vw 
    .home
      padding-left 1.5rem
      padding-right 1.5rem
      .hero
        .home_img
          max-height 210px
          margin 2rem auto 1.2rem
        h1
          font-size 1.5rem
        h1, .description, .action, .description_title
          margin 1.2rem auto
        .description
          font-size 1.2rem
        .action-button
          font-size 1rem
          padding 0.6rem 1.2rem
  </style>