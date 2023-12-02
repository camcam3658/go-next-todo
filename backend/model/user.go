package model

import "time"

type User struct {
	ID 			uint		`json:"id" gorm:"primarykey"`
	Email		string		`json:"email" gorm:"unique"`
	Password	string		`json:"password"`
	CreatedAt	time.Time	`json:"created_at"`
	UpdatedAt	time.Time	`json:"updated_at"`
}
// クライアントからのレスポンス用の型を定義
type UserResponse struct {
	ID          uint		`json:"id" gorm:"primarykey"`
	Email		string		`json:"email" gorm:"unique"`
}