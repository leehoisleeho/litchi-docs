# 系统初始化

在 nest-server-litchi 文件夹，找打`src/init/init.service.ts`文件夹，里面有系统初始化相关的代码。

## 管理员账号密码

```ts
private async initAccount() {
    const account = await this.accountRepository.findOne({
      where: {
        username: 'admin',
      },
    });

    if (account) {
      return;
    }

    const newAccount = this.accountRepository.create({
      username: 'admin',
      password: SHA256('admin').toString(),
      permission: 'all',
      createdAt: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    });

    await this.accountRepository.save(newAccount);
  }
```

这里可以修改 admin 账号密码。如果不修改后面也可以，登录数据库自己修改。

## 基础页面

```ts
private readonly DEFAULT_DIRECTORIES: DirectoryConfig[] = [
    {
      directory_name: '首页',
      router_path: '/',
      file_path: '/basic/index',
      icon_name: 'HomeOutlined',
      sort: 9999,
      isShow: '0',
      isMenu: '1',
    },
    {
      directory_name: '系统配置',
      router_path: '/system',
      file_path: '',
      icon_name: 'SettingOutlined',
      sort: 9998,
      isShow: '0',
      isMenu: '0',
    },
  ];

private readonly DEFAULT_MENUS = [
    {
      menu_name: '菜单管理',
      router_path: '/menu',
      file_path: '/basic/menu',
      sort: 3,
      isShow: '0',
      isMenu: '1',
    },
    {
      menu_name: '账号管理',
      router_path: '/account',
      file_path: '/basic/account',
      sort: 1,
      isShow: '0',
      isMenu: '1',
    },
    {
      menu_name: '权限管理',
      router_path: '/permissions',
      file_path: '/basic/permissions',
      sort: 2,
      isShow: '0',
      isMenu: '1',
    },
    {
      menu_name: '系统设置',
      router_path: '/system_set',
      file_path: '/basic/system',
      sort: 4,
      isShow: '0',
      isMenu: '1',
    },
  ];
```
