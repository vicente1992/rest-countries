<template>
  <header>
    <div class="wrapper-content">
      <div class="wrapper-header">
        <h1 class="title">Where in the word?</h1>
        <div class="wrapper-mode">
          <span><i class="far fa-moon"></i></span>
          <span><p>Dark Mode</p></span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: $ligth-elemtens;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  .wrapper-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    .title {
      font-size: 22px;
      font-weight: 800;
    }
    .wrapper-mode {
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        .far {
          color: $ligth-text;
          cursor: pointer;
          font-size: 18px;
          margin: 0 10px;
          transform: rotate(-25deg);
        }
      }
      p {
        font-size: 16px;
        font-weight: 700;
        color: $ligth-text;
      }
    }
  }
}
</style>