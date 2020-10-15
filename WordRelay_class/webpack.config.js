const path = require('path');

module.exports = {
    name: 'linkerWordRelay-setting',
    mode:'development', // 실서비스일땐 production
    devtool:'eval', // 빠르게 나갈땐  hidden-source-map
    resolve: {
        extensions:['.js', '.jsx'] // 이게 있으면 entry에서 파일확장자명을 명시하지 않아도 그 안에 있는것들이랑 이 확장명 붙여서 매칭되는걸 붙여줌
    },
    entry:{
        //입력
        app:['./client'],   // 알아서 내부적으로 부르는걸 불러줌
    },

    module: {  // entry를 읽어서 modules를 적용해서 output으로 뺀다
        rules: [{
            test: /\.jsx?$/,  //정규표현식 js와 jsx파일에 룰을 적용하겠다
            loader: 'babel-loader', // 바벨로더를 적용해서 최신문법을 구문법으로 교체하여 호환되게 하겠다
            options:{
                presets:[
                    ['@babel/preset-env', {
                        targets: {
                            browsers:['> 2% in KR'],    //browserslist
                        },
                        debug: true,
                    }],
                    '@babel/preset-react'
                ],
                plugins:[
                    '@babel/plugin-proposal-class-properties',
                    'react-hot-loader/babel',
                ],
            }
        }]
    },
    output: {
        //출력
        path: path.join(__dirname/* 현재폴더경로 */, 'dist'/* 앞에 인자에 합쳐줌*/),
        filename:'app.js',
        publicPath:'/dist/'
    },
};