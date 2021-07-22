import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection, getConnectionOptions } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
        useFactory: async () => 
        Object.assign(await getConnectionOptions(),{
            autoLoadEntities: true,
        }),
      }),
],
})

export class DatabaseModule{
    constructor(connection: Connection){
        if(connection.isConnected){
            console.log("DB connected successfully");
        }
    }
}


// import {Module} from "@nestjs/common";
// import {Connection, getConnection, getConnectionOptions} from "typeorm";
// import { TypeOrmModule } from '@nestjs/typeorm';

// @Module({
//     imports: [
//       TypeOrmModule.forRootAsync({
//         useFactory: async () =>
//           Object.assign(
//             await getConnectionOptions(
//               process.env.NODE_ENV === 'production' ? 'prod' : 'dev',
//             ),
//           ),
//       }),
//     ],
//     exports: [TypeOrmModule],
//   })

