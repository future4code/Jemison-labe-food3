import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
        components:{
            Button:{
                variants:{
                    login:{
                        bg:"verde.500",
                        width: '100%'
                    }
                }
            },
        },
        colors:{
            verde:{
               500:'#5CB646'
            }
        }
  })