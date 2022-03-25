package main

import (
	"fmt"
)

func main() {
	str := []byte("ADasfads123!@$!@#")
	for k, v := range str {
		if v >= 'a' && v <= 'z' {
			str[k] = byte(int(v) - 32)
		} else if v >= 'A' && v <= 'Z' {
			str[k] = byte(int(v) + 32)
		}
	}
	fmt.Println(string(str))

}