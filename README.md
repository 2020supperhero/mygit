# react 图片懒加载

## 使用

### 安装
```
npm i @cyf-super/react-lazy-image
或
yarn add @cyf-super/react-lazy-image
```

### 应用
```
import { LazyImage } from '@cyf-super/react-lazy-image'

const myImg = () => {
  return (
    <LazyImage
      placeholderSrc="https://images.pexels.com/photos/11586556/pexels-photo-11586556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      placeholderStyle={{ width: "100%" }}
      placeholderClassName="placeholderClassName"
      src={photo.download_url}
      alt="myImg"
      className="imageClassName"
      style={{ width: "100%" }}
      key={photo.id }
    />
  )
}
```

### 属性值
- placeholderSrc：默认背景图
- placeholderStyle：背景图样式
- placeholderClassName：背景图class类
- alt：背景图别名

- src：真实图片路径
- imageClassName：真实图片class类
- style：行内样式

## 运行

安装依赖
```
yarn install
```

运行例子
```
yarn start
```

构建
```
yarn build
```

