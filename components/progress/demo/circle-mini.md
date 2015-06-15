# Circle 用法

- order: 0

Progress Circle用法

---

````jsx
var Circle = antd.Progress.Circle;

React.render(
  <div>
    <Circle percent="30" width="80" />
    <Circle percent="70" width="80" status="exception" />
    <Circle percent="100" width="80" />
  </div>
  , document.getElementById('components-progress-demo-circle-mini'));
````

<style>
.ant-progress-circle-wrap,
.ant-progress-line-wrap {
  margin-right: 15px;
  margin-bottom: 15px;
}
</style>