# 方法二：原理
<?php
function change(&$string){
    for($i=0 ; $i < strlen($string) ; $i++){
        if ($string[$i] >= 'a' && $string[$i] <= 'z') {
            $string[$i] = chr(ord($string[$i]) - 32);
        } elseif ($string[$i] >= 'A' && $string[$i] <= 'Z') {
            $string[$i] = chr(ord($string[$i]) + 32);
        }
    }
}
$str = "ADasfads123!@$!@#";
change($str);
echo $str;