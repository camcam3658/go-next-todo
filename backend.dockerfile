FROM golang:1.20

WORKDIR /app/backend

## ローカル上の「backendフォルダ」配下の「go.modファイル」と「go.sumファイル」を、Docker上の作業ディレクトリ「/app/backend」にコピーしています。
COPY /backend/go.mod .
COPY /backend/go.sum .

## Goのパッケージのダウンロードと、Goの依存関係の整理を行っています。
RUN go mod download && go mod verify

# ローカル上の「backendフォルダ」を、Docker上の「/app/backend」にコピーしています。
COPY backend /app/backend

# Airをインストールし、コンテナ起動時に実行しています。
# Airが導入されることでコードの変更の度にビルドを自動でしてくれます。
# これがないといちいちdockerをビルドし直さないと変更が反映されません。
RUN go install github.com/cosmtrek/air@latest
CMD ["air"]