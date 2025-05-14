

export const metadata={
  title:{
    template:"%s | Technical Agency",
    default:"Technical Agency"
  }
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
       
      <body>
        <header style={{backgroundColor:"teal", marginBottom:15}}>Header</header>
        {children}
        <footer style={{background:"red", marginTop:15}}>Footer</footer>
      </body>
    </html>
  );
}
