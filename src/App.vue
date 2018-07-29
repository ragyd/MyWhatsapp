<template>
  <div id="app">
    <div class="header">
      <h3>WhatsApp</h3><span style="float:right;"> search [ options ]</span>
    </div>
    <button class="tablink" onclick="window.location.href='#/camera'">Camera</button>
    <button class="tablink" onclick="window.location.href='#/'" id="defaultOpen">Chats</button>
    <button class="tablink" onclick="window.location.href='#/status'">Status</button>
    <button class="tablink" onclick="window.location.href='#/calls'">Calls</button>
    <router-view class="container"/>  
  </div>
</template>
<style>
#app {

  box-sizing: border-box;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.header {
    background-color: #005e54;
    text-align: left;
    padding: 10px 10px 10px 30px;
    color: white;
}
.header h3 {
  display: inline-block;
}

.tablink {
    background-color: #005e54;
    color: #7ba5a1;
    font-weight: bold;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    font-size: 17px;
    width: 25%;
    border-bottom: solid 6px #005e54;
    z-index: -1;
}

.tablink:hover,  .tablink:active{
    box-sizing: border-box;
    border-bottom: 4px solid white;
    color: white; 
}

.tabcontent {
  margin-top: 20px;    
  padding: 100px 20px;
  height: 100%;
  color: black;
  border:3px solid #005e54; 
  background-color: white;     
}
</style>