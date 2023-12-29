FROM golang:1.20-alpine
ENV GO111MODULE on

RUN apk update && \
    apk --no-cache add git && \
    apk add bash
RUN go install github.com/cosmtrek/air@v1.29.0


RUN mkdir /go/src/app
WORKDIR /go/src/app

## ローカル上の「backendフォルダ」配下の「go.modファイル」と「go.sumファイル」を、Docker上の作業ディレクトリ「/app/backend」にコピーしています。
# COPY /backend/app/go.mod .
# COPY /backend/app/go.sum .
# COPY ./backend/.air.toml .

CMD ["air", "-c", ".air.toml"]