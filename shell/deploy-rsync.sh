#!/usr/bin/env bash
# 在这里编写项目的提测脚本
#!/bin/sh
dns=audition
name=vuepress-$dns
# 发布
echo send project $name:
rsync -arz docs/.vuepress/dist/ root@www.hu77.top:/xp/www/home/$name/

echo you can visit http://$dns.hu77.top/
