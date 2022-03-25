# 方法一：系统函数
<?php
function change(&$string) {
    for($i = 0; $i < strlen($string); $i++)
        $string[$i] = $string[$i] == strtolower($string[$i]) ? strtoupper($string[$i]) : strtolower($string[$i]);
}
$str = "ADasfads123!@$!@#";
change($str);
echo $str;