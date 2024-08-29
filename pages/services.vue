<template>
  <div class="service-box">
     <h5 class="service-title" >What can i do for you?</h5>
    
     <ul class="list">
      <li>Build you a website</li>
      <li>Create your lightweight webapp</li>
      <li>Develop the software you need</li>
      <li>Manage and monitor your site</li>
      <li>Offer you technical assistance</li>
    </ul>
    <div class="contact-text">
      please feel free to reach out to me
      [contacts are on my <a href="https://github.com/neoSnakex34/myPortfolio/blob/master/public/cv.pdf" target="_blank" ref="noreferrer noopener"  style="font-weight: bold; color: var(--green)">CV</a>]
    </div>

  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
  .list {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    text-align: left;
    font-weight: bold;
    font-size: 1.2em;
    color: var(--blue)
  }

  .service-box {
    padding: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column
  }

  .service-title {
    text-align: center  ;
    font-weight: bold;
    font-size: 1.7em;
    color: var(--foreground);
  }

  .contact-text {
    padding-top: 10px;
    font-size: 1.2em;
    color: var(--foreground);
    font-weight: bold;
  }

  @media (max-width: 768px) {
    .service-box {
      padding: 50px;
    }

    .list {
      padding-top: 30px;
    }
  }
</style>
