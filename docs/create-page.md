# 新建一个页面

## 新建目录

在 vue-admin-litchi 目录下找到 `src/pages` 文件夹，在文件内新建一个文件夹，例如 `test`，然后新建一个文件，例如 `test.vue` 。

然后在管理后台侧边栏找到找到 `系统管理 -> 菜单管理` , 点击新增 , 选中`目录` ，然后填入信息。如果是一级目录，`是否存在子菜单`那里就选中`否`。然后输入文件所在地址，文件地址那里做了优化，可以自动匹配，你输入的关键字，然后点击保存即可。

## 新建菜单

新建菜单和目录类似，只是将 `目录` 改为 `菜单` 即可。大致跟目录类似，不再赘述。

---

::: tip 提示
添加或者删除目录/菜单后，为了符合直觉，页面都会强制刷新，省去了每次添加/删除完，还要手动刷新页面的操作。
:::