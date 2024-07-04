import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Friends.css";
import { useAuth0 } from "@auth0/auth0-react";

function Friends() {
   const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
         console.log(entry);
         if (entry.isIntersecting) {
            entry.target.classList.add("show");
         } else {
            entry.target.classList.remove("show");
         }
      });
   });
   useEffect(() => {
      const hiddenElements = document.querySelectorAll(".hide");
      hiddenElements.forEach((el) => observer.observe(el));

      return () => {
         observer.disconnect();
      };
   }, []);
   const { loginWithRedirect } = useAuth0();
   new Tornpaper({ grungeScale: 1.5 });

   return (
      <div id="bodyFriends">
         <div id="head">
            <div className="hide">
               <h1 id="heading2">
                  <div>Communities.</div>
                  <div>Heart of Gaming. </div>
               </h1>
            </div>
            <div className="hide">

               <dotlottie-player src="https://lottie.host/d82361ec-54b4-4958-bcda-a48ce4e33fc0/7C363TDmSu.json" background="transparent" speed="1" style={{ width: "300px", height: "300px", marginTop: "23%" }} loop autoplay></dotlottie-player>             </div>
         </div>


         <main>
            <div id="gallery" className="hide">
               <article class="card" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFHglRyQrPXWu4ja0WUwxW_GHH2gt97O2WQ&s')" }}>
               </article>

               <article class="card" >
                  <h3>Explore Tons of gaming genres: We have it all! From fun to horror! From Adventure to strategy!</h3>
                  <h3></h3>
               </article>

               <article class="card" style={{ backgroundImage: "url('https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/09/Biggest-Gaming-Conventions-Ranked.jpg')" }}>
               </article>

               <article class="card">
                  <h3>Chat with friends:
                     Talk to your favourite buddies and discuss on what the hot topic is. All while Playing!
                  </h3>
               </article>

               <article class="card">
                  <h3>Track your history, visit your frequent visits without the hassle of searching again! Let's go.</h3>
               </article>

               <article class="card" style={{ backgroundImage: "url('https://luhisummercamps.org/wp-content/uploads/2023/07/header-esports.jpg')" }}>
               </article>

               <article class="card">
                  <h3>Get notified about conferences, launches and all those new fun thrilling games!! Yes Gamer.</h3>
               </article>

               <article class="card" style={{ backgroundImage: "url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXFxcaFxgYGRsYGBobGhgXHhoXGBgYHSggGh4lHR0YIjEhJSkrLi4vFyAzODMtNygtLisBCgoKDg0OGxAQGy8lICUtLS0vLTUvLS8vLy8tLTUvLS0tLTAtLS0yLS0tLS0tLS0tLy0tLS0tLS0tLS0tLS0tLf/AABEIAJ8BPgMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEAB//EAEAQAAIBAwIEBAMGBAUDAwUAAAECEQADIRIxBAVBUSJhcYETMpEGobHB0fAUQlLhI2JygpIVQ/EzotIHFkRzsv/EABoBAAMBAQEBAAAAAAAAAAAAAAECAwAEBgX/xAAuEQACAgICAQMBCAEFAAAAAAAAAQIRAyESMUEEE1EiMmFxkaGx0fAFQlKBweH/2gAMAwEAAhEDEQA/APiIrtcr1MY7XqkBXIrGPV4V6u1gnVrorqjNS00UYhUhXAKK4R1AcMsysA9j5UAlQFersVNaZJGOA42FSDDtXCKkLR9aPJoxJT2x71NjXEJiIG4MkAnAOx7Z28h2FSCzRbXHsJ6fIVNRUhw7RMGrfgTEb9e1TGOmwRuCO0iKss8ODv8Av2rxtExn9+9XWuHPSsglZtdjNEcOgjKkn1irrdgn+U0Xa4Eno3spNYZASJRnDWqdcp+zd+8wRUOepED3mvXOBNt2RhDKSCPMHNI2/BVIhwvDk1ouWcu1YiheAs+dbDklgY2qE27LxpAo5J4djPXtSnmPAROK+p6FCdIisF9oHGdqE009sXFl53owHMUiaS3u247U65o+TSe1fCuGKggEGD18jXViyTS7/vwJNKwHieHI3Ee1BTE/mK+w3+ccBzPSt5BauRCCYIAJ2cAT/pisxzz/AOnrpLWWDr2OD9R+lPCTjK/JF7PnzEtgA57VVoP9MU1v8vu2WOq2R0yNQjPsaXveJLMQAT2nfHck7xTSk5diDbhPslxVzhhxSoPhM+hSWEk5khdyJBHt70tv8tZCdZAP+lj+IA/GieD+0F+2i2/iObSk6bc+FZOSoOAd/wBmmD/aBx8yrcQ7GIPvGJ8oqacom0ITwmAQCRG8gdYkgefeqC5XEAddu/WntzjbDj5Sk5xgfdihhy4XmJDkgLksZgKsKsk4EAKB2EDoKZTadq7FcRaGMSd5mqGJplxaO+ic6UCj0kkD0E0MbB7H2X9TVuSl9pitPwJ66KsKV0265wURWpV5RXaJiFWKKjViUDHlSpFIrk11WnyohPE5zG0bAfWN/U12KnetEelQAodGCOD4b4jaZjDH6AmKpWr+B4j4bh4mJxMbgjf3qtRQ3YfAzv8ABWx0cHpsw/KqbdpZMiRGMx79aqtz0x6VcJO5+tZWO2n4I6I2q7+HYbqR7V5VoxONIxLex/flRcmZJFdnhT0x91HcNw9tSC5J/wAo6+X7iqhx40x11E5XOw/m3748vOqJkzv+/Oltsakg8ra+IxXX8PU2kGCwWTpBzExE5pnwtu2mpmtyNl6+KB0PqKz63oGN6nbuEmcyes0yAmaXjubm4LU2lUW10KVWNQmRJ2MTVnCcxjAUE4wROx/YNJUUhJNzOoDRmYIMvOwiAO+R2MWXuLKYByR3Bx7bdcUF9w1mnu/aJrYhDD/1LiD2EdfP6UHwd03rniUl3O8wST1JbzySe9ZZuNYkEGCDiMEHuD0NFcNcbzrUuxlI05u6HZRiCRkgxHmMe9aHlPMIgk1iuFeYkx2plZ4uIyfuqcoWysZG843ncJE1jub8y1bUNx3MAR2x3NJr3ESBAAjrJk/+PKjHHuzc0loH4ziCTv8AjSm9cprxUMuNMiZxkz1mMjy6UBETAGRBkA9u+x8xmuqPRGTsG4fi9EyoaRG5BGZBUg77VsOQfbU21UXbitLMIzqAEQxxEGSB18JkCscUz0ohOPdDEAAkHSInG2d66I+3TUl/4Rkm6pn1N7ljiVkAZrLc6+yKHKqPb8aQ8Dzd7bSWOc5MkGtpyvna3FgnOI865JLiyhgeK5GUmFBxAmcbZEen3mkZsOhIIwT+zX2HiuHVpEQRII6gjcGs/wAx5KDOKF2K0fP3ukRABAERAz5HvXOX8A7uERWdzsi74BJPsASfIVpL3J4OBHnUbNg2hCxuSSfmyoUxcGQIG3me5ot6Ao7LuF+zgeyHtcWrXM/EtFSGtvP/AKZJOSBviPWq7nK3t4cID52pn3zNTtcXB8Ur5kSD31Rv6mtJwd94BBVhGzSY9GU5FSbaHS+D5RxFuKiUxNEXCGqtV6d6IjQOEqJq680eGMkf+KjZAB8Sk+hiK1i0VKtTiP391dFsmMZ2/v8AjV9sRGsEiOh6YPfbOwjYULGUSo8OQAehEj7/ANDXgg6z+zn7vxq9bI20kE9/0A/cUfdtwSAHgARjybuNsk+k+wciixWc5PY+LKMJABOrOIIwTMQZ39O9Fv8AZ94AALDUICkE5wcCT29s0AhnBBEwCDvJiIx5E+3l4iV5lcWQbpPYnIYYnDjePyihth4xXYHxfCBbhVdUdA3zbxmBvNQWydv37fd9aZ8v5kusrfEqf5oGtSFgEEyCBnBB8oqHGcIbYIbSVaCrdYYAhvKIWR0BA651+BeKasgOIi0EKZ1atR37EbbdfeoO0SSsdfIZ6VOGOldQBMqATBQgqpMAGATGeoUjpjt9NJQwykj5TIgZ2Pfy+tBMPBEL1wFiV8KkmAdwMxO9Rg/hVgKkSLeIA9/qD3+p7UZw3BBlLKZCssoSA0ErgE4Jy30+r8qBwvoEsjPT61beRgSCIj0P3jemPLLKJd1NpKAtKGQywSAGHnG6kx91d5sE1F7doohBAUMTpwMg9ROo9vF6VuS8G9tpbFamr7b1ZwqKxgeE9BkiImJgnv0onirXw3ZGBLKYMQZBOfUzImty3Qyx6uwZ70bb0OHou5wg0C4rES+nSRsYmZmNtP1oO4pBI2P4etFNMVxaLUIpnyrh3uPCKxwZgEjCkwY9KUoI6U55FxbfEUSGB1Sp6+FupHTf2ovo0exryngw7aXnCzEwZkDP31qeF+z1gjIc/wC40h5PJvEAQdAx9M+8VruHlQC8KCQBJySegAr6uDFB4E2lZwepyzWRpNlQ+zPCndCf97/k1X2vsjwh/wCxP+9//lVy8RWo5Uqm0pOx/Hzrnzr21dHNieTJKnJ/mzK//a3CD/8AHT/3H8TQvE/Z3hRtYt/8QfxrS82XS7QMR189o85pakOAScHYDLHMbU2LrkRyqalx5P8AMyPHcosrtatj/av6VmeY2UBwqj0Are82FtcFTJBjUGE+sOPwFZLmPCWiUZrjW0uKSPAXAZWKsgIIJyJE9Csma+96Vwq2v0IZeaVJ/qZ3h+DF03PGilYgMypPoWIH31zh7b2EZiykgjSEYXJznNskCPM0w5ZdKfF+GmsamlmbRIUmPBBjGd+tE2OO+Fw6h7QdSZg3NIJBJE6ROIn2ryvqsjeaTS8npcEF7cU/g5y37QFSMkH6GnCceH86wBGzNck/6gcdMwKO5fzRk88EeX7/AFrNa0Bd7NdxShhIH78qWcTwbBiCpBAk42Hciq+G5kSMkmihxRDaoBOMESMdwcEeRoUzWKblkzgfTb6V7h7ujYlP9Ox9jtRt7iiViFiZ2E/8t48tqCu3pbUETtGkFd5kK0ge1Bo1mJ0kbDET6D9PPzqQtsQTHy7yR57DrsdqM5XwTnMSCGAx/SJY7GQoyRuJFR4rjE1Qq6CAwBGlwZadJ1CTAjMyDiOtR5u6Rb2UoKcn2Ljf8UsNhHbqYPlU7FktPiAIk7xiJMevbrtRz22QR4G3YPGCcgxKycbdMTgg0NwhQMCCykSdtW2RPkTjYxPXajeiahTV9ELnDleoOSMGdo+7P3VZw9kMQslSY8J6yBkYjIg5+/FGpddXwVYaABrAG+ZABGxYgHb6CAb1sx8igHAIPmBIPUT123oJ2PLGo7QXd5aSYmSCwiGmVjG2+MdcGYovhOGYYkt/SIY7rCR6yQvp1GKWDjGRjLFjqk+Jtxhp6ydp3EedW27mpIBl5HecQBHoSxETiMUGmVhkx3cVsOv8qZiWQMdREQCATOlIkk5IMb/KRncRYOEKtanAIJPTTPcbgEzvgR2I+hlYEBQNJIUnEA+fzDMT1z3NXX+JWUV538cKoES22M9BkAQF3UChseUYU21TK+I/9RXYFCxV/EsDTjJDd8xvPvV7XLottbHjtzqJIkHaGXV8vTbpU7XEWtPinChlDADxhYAhV1dFM+p3bUGHC81WwNdpNHxJAOkMGKkxqESCAwkCTM9xI5P4E9uH+7+/sLuG4tDDuADBHynQYmcoZkgqMHGO80RZ4hbpWVVbm5ghZnEnWQI265ncUbbZrnDBrqlmMmNSj+bDhdMSFB/5E9aBuXLSqFS3cOoaJuATAkeEIACMnJ7es5bNzpJN6feiRtJba3ckgtJGgyVAzJHRsSJgHPlQRtnUQrDSbkB48GIgmB0n2r1rmY+GADLZOlgrKSRk95jr5DtTLgPikAGyxRgNQXVk4EqCdK4AxEUytE7jLRGzeYQkPouFQRjxEbTJ3DNM7HykmmfA8Jba2AWcviFBjdSQAGjSQVZSCdzMGgeL5dejU1uH1ABSuSFCZEHrnYdDiqrV5lIdXBRAVALMTjV4o3EmW8sDuaXtaLQS5VJaHB5f/C3WIt/xFrSC4KDUoJYAgbkyN8Dae9Vcfx9n4lt7bBfCoOq3JELbUMCIbGSOuBnNA8fxotHUgCuXkb6h0D23IESdxJzE5FLm4gEF9KgyJUkRI3hR0OOnT3qkYN7ZOU4xuKGlmwF0AtbZj4gywwEAMWfaBpjcxhsda9fspOrWmoSulAxLGMFcZBMbkHxdqXPzF3ADHCzggZJIJ/M+5oi3x0EF7QcqZOosAxJ8QIB8yd8TtTKD7EeSPSGljgUZB4hmAvhJGTmGBG39J2M1Pg7WjdowcQwbK7BgoHmc7Uu/6y6swsAW1ZpVYDQIA+Zhn3ozg+bzbuG4gdgLejwhE3b4gb4Wn5gAR5rIxNDhIf3YPwPeQ8Sq3HJaAFWNRzucEnNXc15vLgg+FCIg77EnH7xWZt3PE5Plt70ZZuCVJAIkSD+/xr1f+Nwr2Izf3/ued9ZkbzSij6BwjWmthi7IcySsrjeIaehO3ftWm+z/ADhPggEnwhpMELhjBmOoj9zWQ+x3KBxActdChdS6Ao1GV+YmdpO2dulUcVwh4fixw7MWtwWE4BlCQdOwOoEe1cefHjyylj5bWymFyi4ya09DL7Uc1JdipkGIPY7Y77ffSYc+uBdCMQFGdI2k7kjzPWp/aPjLYt6FINyNhuPM9t6VWucfD4f4MFJS7r7XGbCkx2Vuu2gd67PT4V7Ufpvf9ZL1UlHK0n4/qKOOu3tHxTbuaGn/ABCDpOY+b1xTH7RoG5Xwd1RlWZT/ALy+o/8AJR9aHe+Tw3CXYYr47N2ATKM1wGY7AyPOKL4xNPJ3tsZ+HcYT08N/cev502bLx4v4n+m1/fxJY8Td/fH+GYvh3i2ZvQYJCgp17ggmTR1kMVUTcuDTstu0+mR1m2Y7TSzhAugh3W2P6mDEDIx4FY/dVHGuk+EBxEA6DDA/6lBB23APpXl5w5SZ6OEkqGZ4a0lof4suNM2/hoeonxFJMAnG8iOlCDiLahlEkNpGo2rWPnmQjb7byRp2pW3EgW9IkHcgDB2x9wO3SKK5RzWzacm7a1gqF0LCjBB1E7zgbbyZma3BpMZ5IdHE4mCdLEgGJ0j077UzHM/FqiNse0Uv43naXGAtcNatk7sPiFjt4iC5AgA/fTPgOWopl7qqGMN1hSJljJGdwAcye1CU+K+oEMfN/S9fJw8Xq6VF2FXXOcWV2AuQoUKQUXrv5wYn+xoJuMX5tI6iCZHlAABHXOZnpQ5N9o04Ri6UrMrd5o84gQScDqdz7wJ7xRvKbxcFWjTsO7OdvMxmY2HrSm5briOynwkg+WN9xihOOqQscjjK2bb/AKMtwiFIKx4y2qckAQMDTBjfrmkfFcr0uyNKlWacdDB37dj5jei+R84uqhBAYdJncLC/TBjyFaX7UIl+zauMvw2YFTvkYMTB2gRP9VcKlOE+L6OxxhkhyXZmOH5WCjPIJKgqQYk9QZz9RtHrS7iuFAIUNpkLIzAMhT/8pmmCFdPhuECQV8T7KCsYA8vLFX2LlkuGuq10AH+Yj26/ltXQuRFqLVCR+HJMNJkb+hjJyPlgztkVC2CCGbqxOsTJAPiYEZ36nvTPjv4RnCWXurICkMgYbjwhwdWO8NQnGcLdFtQ3iUbMsMkQIMgSuP6oop32SaraBuIMN0I6aiTK5jVkxmcYPiNWcPxGiACJmZJxtj95oW4hGnYyMenQknAq7hrSk7iBBk4nBJGcf+KalQsHLn9IXrumNmjG4PRpkRsQzf8AIDoKss2wILMqwQQwnUT0JwTAmdo8J9CFf0rlDmckHvv+IxRH8QHADSTrO5AEYJgR6SK20tHQuKb5dr8glOc3FJ+G/hLE6dIYgY8RLgmJnrgnzp9Z+01y7phUN1RGgnSLu0aW6P8A5WwZx0Ws1/CgXGCCU/kJGmQQBDTmYOfPp0q+zyu40nEkjpGMye3bE9KXjGS6E5SXQbe+1lzXqS2tszmC8jvI1AT7UPx/P790Q10lT0Me3SquY8MFt5gspHiiDBxpaCdUdDv7Uo1U6xpEZZJdNhrcwuQAbj428Rx6ZxUku64zDRGIExtON/P6zQJkR+4yRB7f3FdRiKdUJbGN22cTBjuZx2q6xbSPGdhsAAepOTvjr+lL7XGMPlxiO/4/vNTs8E7AFYMziQGx5HJ9pqi+4RyrthYa2PMGQJwPWR2ncdZ7GuDihpOBAI7nMHuewj2FGcq5fcKyEQ5gyc46EVbx7nSSyIAsREyfLbagm7oKafTBLIuMQqoSxwBBnOwj1NNeF1G2yBUVfCDAglobTuZbAbp+VL1564IALIBuodoPbHSPL7qI4bjF3GACp05M6R3Pv16ntTPvRoNuO1TCL1tgzR3P3VCzxDkYUkDyMT+Z8q0PD3OENku1ybzliUAJCSxgExE+9ILAdrTEEwASBnBlRjzkiqw9VlguMZOvxFlhg3ckafkn2kPBrqcMhc/zWXMRv/3EEntB+UVH7TfaP+Jcv/hqUTfUVLZGkaZOkkt1MQPKsvfvXkEFnjtr/IGq+H55xGsL8e5pkiCxYAdoaaEcmVZOae/kdwxyjxrQyTikCSHts+CVltQ7jKaTmM6oxjehuO4yGKnxEEglTqBjqD1G9SAdpcKjN1OhDPcnw1BFFwMXRTpDeEDSDGtmJ0xJ6+1dq/yHqF/q/Rfwc8/R4Krj+/8AJTY5sy+FXdRn5WIH3ETTLj+earFzh1nQ1xGWd9IQBgf9yqfc0Hc5cmoKmSBmg+IbS5T4dwkDOlCw3O+nbamyerlOP1USh6eMHaKOLHhUDqaPPL2uafhhmInUqzJBwNj0PSOpzQVzjkGnUlxY7oRJ6b0NxvMrJmN9QgMMQFgyQZmenbrXE+PaZ0Rk23aHPGfZ1/hswDoQsxcwCSygKNSjuSSTAgVmb2q2xW4kEGGBGQR0oj/qQA8L6fJbjD6AmR9TVHEcUrwSxJ2JZp2gKASZ271Pluykq8FPxBOMemKZDnDC18I20IAEP1HefI+3qaTuUGQ4mdvLvO3tR3B8WnVcx02JjzMZrVGXYFOUejy8b4gQAANh+p6/3oxOYsZMxPnAOTnr1JPvPWuvy5WEoQPvX9V/Cl3E8LctwCCPPoff2oTxNBjkYO9VsKNXh5qdrhZMASTsKhJnWsTY3+zL6WW2m7tDMYKqsjYdWxv0p19r+NuMtq3bVSXt3cFQ8RpkgFSZIJyM+EUjs8C1q8gOWKamH8oDSAPMgZnpPlQnPea/E4ldEFLahVPQxlmBPQ/gB3rj48snJHbknCGHj56FiF0XxKQAWAx1WNSntEj61Re447LjAE7n1rvHX1MooGkXHYMJ2MCO0YHr9wnwFhWmbbNHUKzAdvlIzv8ASurlStny9t8UyfKuJUMsjxLkYBBjImQcD74pr/FbAYjaP1oK/ZFq81kZRtPTJDICIBMj5tp6bmiuJYfMBs0Fg2pXzvbmGK+YB86XknTKpOqfgE5ip0yBkkT6Qd/eKp4dfiEqWIODMeEQDAPbaB6/X3F8XIkHHQCc7QT264/UUAlwg6gYPem7RFumPeV8pV3Ak6TESIOY6HA++jrdi2gyOv3+lLOXc7ZQVfMgwTvMQM7iiv4hhbQ9AAOjCQJiZg48qa0NFqiXFcxUAhREAxiM9N6sXngCEOpDjEd/OOn1pdeu2jkoUOcoxYT/AKHP4MKEv2gCIcNOdiCMA+IEdZ6E0QOTRbf49mXSYzvQoqYWrLLlSGBgjr6iD90j3pqJkBbothbPRh7gj2ET99X2OItuIZgpG+m0hBycgqVjECM95zA5ct2ulwn/AGEfmaPHV/8AYnuK63+T/eqB9IFdtuQCYYAyARiDjfv1Eec5iDbptiDq1ZEgYMdTTHg+PQSoAjdQAQfPUSTU5ycVaQ62LzcIUHYqD03yoGPc0Ze4wvb0sQCQhHTzMgb0Fe4dpkJiZidx2j99KJ4XhWusVgooUkkydunqZAFGLbdoLSS2CG0JEEff+kUSFQEAAzOSSPwq82rUrDkziIEj1MkR6GcdKN+GiAtG31++mVtlFJRTAuEv6WBIGnXJnLQSJz09s+tabkb2vnW41vxGFIVtsdRsd/p1pVwl9LgJHTcH+2KJFkEEDE9unpVV6e9pi+5WmrL+dcOhYM/GmWP81v8APUBv+NJLvNL6+AXQVWVXwIwKrIGnUJiPxqXE8iuj5Icdzg5323pdctE/zecZpalDtglJPUVX5mv5Ffv29F1rS3VuKGIDIhIIn5cAHyApY3PVt3b3+EVF1bgUEg6Bc2Jjcgdu9BXeEaBLjCaOo8P9OOlLrvDePRuSCcHp/wCKpHDJO5Alki+htY5sBc+JIM4zj8ParuH5iR8a6zBUL20Y7zCgwuNRMyYHbO1ZV7/Tt+96q+KQZ7T2IkxJgyOg+g7UMkotUhDR8ZxpulddwW+HZ5DNqLESTJC5UY+UeLoOlNuUXBcC2w1trdtNWsDTqEsW1hs656diOmTmLX2l4hVVNalFEKpRNIEOIgLn53/5GiLP2u4hVKKLQUiMWwMEEECNhBOK5mmMkjV8psarSbHVqZjiMA6c/wD61G9XcBwHxeIcAW9NsASIKy+mfoEUerkCaxfB/ae9bYFY0iIt6nFuQoAJQNBIAETsc1fwP2xvWS7W0tB3ZmZtJJkkEgEnAwMfWaD5eDJRNFem7e0qoKp4iojI0gdOwW4Y3ztistz52eIELLNHTxMxEekn2NB8Tzq48ytvxNqMKQCfSYjyqXC3LrSVJA2AB07eQjyHtVMa3snNUtAqcS9tp+V17jI8iD+dPeWcVbMjXGATqz4v5oGIH77Um4jgnydDD2MfpQasynqKspuDAmpIa2eCLCbbBvKf3FPfs1y7xq1zHUzsFHWayHDXolllI6htz5A00t/aA6WRh4XBDQ0SCCD07E/WuHJzkqR9LDmjF2w7mvOBfusVt6rb+DTOlzmACf5TtA23mcis7/EaHbSdQkjxZBEncUUiAmUuZ/z+Fj28YxIxBMUSnJA63HVhKprglYJ1Qygg56/T3oRShoSbnl35E7MASQPY5j9aY8NxjWrgKnSAQMdQCP70FY4NnbTKqf8AMf0mrua2Xtvld8g7j9709p6MoyhHnWjSc2sF0tOZ/iCrIIIlgGBDqu7kgmYjcb0m4wlbD29Y0pcUBTMkgEGFnGkTODucyalb5wt22EvA6kk23SNQJMwynDCe0ERihuP4hZksbhYsSxwTOTIkgSSTOTUscWvpYcuSMm2vgEucRgLEqCDnvAB9sbVK/eUApoQnHiAgjrAiJ96HtRqkg6ZyB+E1Fzk+tdDj5ObkF8DpJEgGJwdsiM0ZwtkB1wCrRI7jUAIP9tiaB4C0WdRG5APTEic1bw90i+H0SEIJU7abceEnpgRSSGiugvjrMMwB1BSyz3AYgHGOlVcHB1FyD4SAvUEDw533jqKbcdwtpXddXh3QBtI8QYx4hJAJA/PrWdtKVaGWGDQdwQdiKEXyQ0lxltF9oqcljAjZZOfuHrNT/igPkUT3bxH7/D90+dO+M5VbwAHUMd10uMAkR4Qe/SlnE8oCgkXVgCYaVMDyOT7CmU0wSxyR3+JJfxjWJjxfNE7ax4h7GpC4LZnQG1Z0ONSgSQCDIJx+NLbxYMHKkBiWWeoneuDiyTkz+Xp2p4utiS4yi4sbnmAP/Ysj0U/mTXv4qf5QPSli8SO1WJxKnrVG1LslHHGPQxHEdq9/HXADB3EHzyP7UAt/Ex1jvVvC8SoaXBMGREdOhml0tod7VM7Z4jQZ0/XNEHmciCJken5Vdzbm1q6B/haSI2MA77j370Fw1rr06TWhJyMwvk8hiTgEfnXea8U3ylupgCdsRPnIJ96stGq7llLjlTMgAn3866+P0Uid7Dfs3xD6WY3GhThdwcdSQT1G0bUhW+wx7TT2zZW2hAkf+N6z/EXwJ09evrUcipUx0xtx/OFEBcxvsPoc5Hp3pUGa62wJ6Dp7k/r+lUfAYrrI8OM+vYURy5RJDkBT98GRFZzlN0xaS6DOD5R8QNI0kHEnpjoPOhrvJbon5T/uj/8AqKdK6xg/QmgOZWWuJpDdZzv16ijkhS0CLIcK/hCtBAAHT8Y/CfajrdiwR8onvpX8CD++tAHhVY5RgT1VpB/P7qFb4anTN1YOZjHtvXNwO5+tyajfX7DZ+Xr0VD/t/Q00vchsW7StdCq7MIg6hoKyGGV1SSMrq046kgI+A4R7tw27dxiAmrV32gA9ZmN6v4/hkcyzsWGCStxjjoTnaknBqnujq9N6uE1JScOSrTS8/wDAW9jgljCt3gkfcQZ+6u8U9j4RXhyC2k6VgSCe2M9fPsDWffhbQ3u/VH/OvcDwyuTpYiDvEYHWenpWWPfk2T/ItRaUYL76RcONZVEggwBqBIk95AoPiBqMnfv196u4+yqYOqBkTjPYEb/dXOFfUN81W60z5Kp7QGrKDMTH79Ka2ucGIS0nnIgfp+FLmt1K3xbpEGPYdPWoySZeLaGL8RcA1Nw9or1Kb++hp/GoXLFp1N6xgfzpMlCdmHUqcifOucNzd0yIE/04H/EY+kVPhkJuG/bghpFy0PmggatI/m/qHWR5VKmilpg/D3QQVIho+VtmHk3f17dOlPH8ZrQSSRtnJEfj0/YmvcbZA1K2GRoBGzAglW9CPxHegA2rBzg567VRQX2ikvUSlHgyJtHcZHl+leRCd67YeDRVrv8Av1rrw41J2+jjaT6OpY74A6DeqTdwQAAJnz+u5q99iO9BBqb1EukZa6G/KuNtqV1hiQRjocmPTHp3nFd5pcNm8lyyBbDIrqB4hmQfmHcZG00DwfDF5MwACSfwH1ge9N+ecv1G0R4P8JQQ5gQDkq3uJHn1zXDS5/idP1PHfx0J+Jum65cwJjbAEADb2q7mnETdZh1C9owAOhjpV9zhGVdYdGAIB0MSV7EggY6SKA4jiixGqCFkDEH3I396vKKVUQb1s2XBMXtWSBLKNTiRIXTc8ekQdOVE+R7Uk5hxTNxARsIGWBGIx4iDv19gfOlb8T8jKII/zZ9fLtRfGq4T4hK+NyBB8URMQMAZXHpUlBJlZZFLo7zeNfSQDIAwCWJz3wR0FR4binZlUnUCYgxBG0GlpY96I4RTPkKatCKVy0EcQqRc8JV0YDGUOSGnJAztGDU+F5i5U2mGtWBAU/ymMMvYiJ9qsu7FdgxkgbGNiav5Zy4Fbrq0FFPSRlTk5kesQOvnpRSVyHUXf0ivh77JtGetT4riNRDdYz7f2o3g+DQ6iHtuUUMLbal1dxtBI7bd+1V8fZaUY2TaDQD4CF330nrBHafvo+4r4icHxsCW73FGW+MXzH78q5es29Ctb1zOl9UQCdUaSOkAzjE1IWLDyq3H+JBKkqvw2hZjB1KdxOZoxy8divGwy1fB2IPvQ/GWmVhctzJ3+7v0/tSzR2z6H8t66L7riSPI/oau8tqmiVDhGulbis0tCnpgGSQPvH50BasxLXJxmN59e9Rs8xYNqIDEiJ2MeUbVLiONV58JX7xPfpR5RezbKbnGucFjGcdM71dwfHMIU5HnJ9vPaBQRivRU1OSd2akPLWh11aAJ7YP1FcNsDZmX3n8ZofgAVEE7/pirnIMzVntWKtEriNoDljpaQuIYldxk9O1V8RzXWq+FWKyJZRqjpJ60HxNrAiqjxED5RqB38u1T5uOkK8MZu57asYcJzY5gDIAYRGAZgRB3q+5zAu+uVPUyBuI39/xovlJuXUizYtM+RqY5B7gER99Ucx5RfsaTfWJGmCVcd4HXpS+83ps3sQjbSF3NLwunUUh+pWIYdyO/nQdqRgTRgRJyv0JH4UXw96ym6lx2aCPY4P30+5u2ybl7UeMYti4X22Jkdjn6VUbYJkCPStUnMOE0sU4YJc0MA2pm+ZSpBRyUIgncY8jmsmGI6TWnHjW7Dgy+5f0tfiEA1S65q5a44rjs7qDuD5Stz5LgP9StKn2YYPTtRHBcqL2yNTKyNKtAG+D/AJsMNqW8vv6HBOAcH36+2/tTzlysLyXJ8LyrjcaoiPeN/KpZHJeSsFF+BZzUBnXMmWtORsSsQR9Yz0Slj2xaMMpn/NgewH96v5kpt3bkwCHLAf6iSI9jQVziS3zGZM+cnePXH0FXxaSIze/vCrN9CCGtiO64Yeneq38JI7GP7123ftAD/CYnzYx17eVQ4i+jCQhVpzDEiPQ5n3q8crWqEqvJbatSCxMLtMEydwo8/PpVVy2CZiKgXqKqW327VSVPRrGXA8UANKkycQomQYwfEMExNT5hce4hKjUheZG4JBLKep6HbZRUeD45rYAQLA7qrT66gaccq51bkC7ZtDfIUBTMbgzBHQ+tRlicdovGalqTMprIn7x6dxUmQHy9P0rQ/aTlARw4cCzczbJBIBgSpYDHf8sUm4vgmtmGiYBEHcHYiQMfpSqV9k5Qp0gX4OR27+lEs6AgAFgAN+pgTgQBttnbc1STOKiRQoHXQ/t8ssXVGhtLkHEyJXyPfcR1BFLrVkpKtvP7IPah+HuFTIJB/TY+tNObXJunxaoW3n1RWP8A7i1JBNSqy1pq6oGJq3hrjIwZSQR1/I9x5VQpq4GKebGj8hXLFV+JLvps2VK6wo3MDCDoxyZGB+Op4viOFLL8GwbtoAh9R1PMDZrhkkwIHdRHljTGT+/3tQJuMJhiPeovDy3Y8cvBVRuOc8lsvwbvw1wFUlzbKjWu0lWhSABMqZ3JzWL5dYm4AAGMNpBMAnSY3x5+cAVZy3mty04cMTBmJ3jv3oPioW44X5Q7AegJj7qMMcoppsWeXHJqTiFcUXQt8S2J+Uhl+U74nbGfTbeirHLOIbaxdAAkhsJEgf8AcHmO8T0q2xye+bJ4tGWEnckOComVBGcEEUtXibiBYYjUCd95JB1d9qKyN/ZeycsajJ3dF/MeAa02i8mhx/LGiR5NlMHqBGPag3tDuRHeCP8Akv6URY4sti9quIJeJzI3zuAdj61L+NDqVKhWEm2UUKQYypK9CB1nvTqTXaJuMX0Am0dhBPlmoGQYMg/Q0VxNj4fy3FfoShOPLIyPMYqoXm236Rv92xp00ybjR5OMcdZ9c1avMO6/Q/rRnE8vtKg8Uv1CggegjHv+WaVtbG/iA7kY+o/SjGbfTNKDj2F/xineR7fpVbsp6ihRbPTPvn6HNQYRvijyYBnwt1kOpCQe4MfhR9zjjeP+K7ahsXZmHpJOKztdFw9z9aRpGsY3XAYrOR+96rJmgtZ71L47d6ZMwWGioGhjeNe+Ke9bkAYivaart3p96uBrmOhFTLmtJ9n7ylWBIldLAHuJyPoKz7ivWHKmZPtSzjyjQ0JcXZouYXyjKywRpIZcZg9YzMHB6RtRVmyA6NpBVphhggjdGH4EVnfj+DV/Qpx/mdsD7h9aY3r5h1JjCKY/qyWI9mqLx1osp+SS8Arq1y8CYZhjHhDMSZ7x3/ppJz/k3wbjhWDKukzsSH+Ux3zBpm3NXfwpCqRswknuT069+/sHd4Znf4l26WLAHK9IwImBFWxuUe2JPjKNJW/kRFeu4/e9XA9qd2eAsACdcnMgxIPy4g9I+tXJyXh7mEd0bp1HuIH3GuhZ4x7IrDJ9CAPXS1E805ZcsGHgg7EGR1jfPQ0vL1ZZFJWhJRlF1JGh5PzRVVrd1ddth418v6l7MN/ajn47h3U2tZOg/wCHeCkEAnIZYkj03jEVjy1EcPf0ncgdSMkegOKjJbtDRyeA/nXChDbh1uEgkspxviQYI64IBoSxwzOYAmm/B20dJ+Y9zvRFsrbH41JyaOuPp0/qfQDa5XEGdpJBGDAmKv4e3LHxo11o+dSQT2UaTEYyY9qE47mTaiAIiQc742x0pp9mOJtEufluBGKnQDAAJLSPmI7HpgGngmwSyY4XxK+d8v8AhfOBJ+RkhQ2RKtb6QP5h76pkC8DxKp81pbn+qSOnQQR6gzn6G87utcsW2c6rmtmbAAVAoAHnnOP6vqh1nb6ep702PjJkpqeP7XYz4vxFXAAVxgDZSMFR6GhL1pRtU+V2y2sE7FY9TMmrOJ4cr03MUfstpFePOPKgGzY1NjaRPpQdxpYkDBJInsTia1nJLKpcWY05LSCRtjA3zFL+f2wl5tKrJGRpWJzBGMe3UVP3PqoTLhqKf5nLHPtAjQr5Ei5Lq8H+YExBzjpVvMuITiW+ILaosABF+VYAEDtnoNp7RVXEWV20iB5UMlvSToMT03FdeLCovl2I3Lp9F3C8GJYR8ykCSIHnJIJ/vsdiqKsjFSPEsjvtv64onir7josd9/xoW9dB0sBDCAY2MAAMIGD3pMyjeicn4+CAaiAxUSRscev6VdwHAG/J1KpmATPiMSRCjeIMmBTbm/BP8Is2gJpHw9BIBAjSCpX0nbealy8GjBtWZxuIJMnf8K7euzkYkCfX95qu2hYwN/0pweSCBL6DiZ8U77ADGx60HJIVRlLoWWyWmc+v4T0/tRjWlVQC4VzB0yxx/mI8InH5xVHwUyNZ0jORBJHSMgfWi+K5khBC202GQsNgAHUevfHes5PwNGKp2LrhyQUAIORtH0rht4mGA7xI+oqFwicVPh2MgLuYAHmTFPfyTIaOxB/fnXGQjcEe1MuMKqfBJC+Ek4LNmT2A/ec0vZzM0OwyjRXXqua6O0mpgDoBRoWj/9k=')" }}>
               </article>

               {/* <article class="card" style="--img:url('https://images.unsplash.com/photo-1592187270271-9a4b84faa228?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgzMjc2NTB8&ixlib=rb-4.0.3&q=85');">
            <h2>7.Lorem ipsum</h2>
        </article>

        <article class="card" style="--img:url('https://images.unsplash.com/photo-1626283651073-e86d3fe24172?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgzMjc4NDJ8&ixlib=rb-4.0.3&q=85');">
            <h2>8.Lorem ipsum</h2>
        </article>

        <article class="card" style="--img:url('https://images.unsplash.com/photo-1550258987-190a2d41a8ba?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgzMjczMTl8&ixlib=rb-4.0.3&q=85');">
            <h2>9.Lorem ipsum</h2>
        </article>

        <article class="card" style="--img:url('https://images.unsplash.com/photo-1486427944299-d1955d23e34d?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgzMjgwODF8&ixlib=rb-4.0.3&q=85');">
            <h2>10.Lorem ipsum</h2>
        </article> */}
            </div>
         </main>
         <div>
            <div id="head">
               <div className="hide">
                  <h1 id="heading2">
                     <div>Games.</div>
                     <div>Chatting.</div>
                     <pre>Social Media. </pre>
                     <div>Contests.</div>
                  </h1>
               </div>
               <div className="hide">
                  <dotlottie-player src="https://lottie.host/7a4ebbb9-5d60-49b1-a672-4b245bb6b39e/Ss9vULdpuY.json" background="transparent" speed="1" style={{ width: "350px", height: "350px", marginTop: "10%" }} loop autoplay></dotlottie-player>
               </div>
            </div>
            <div>
               <h2 className="one" >
                  You name it. We have it all.
               </h2>
            </div>
            <br></br>
            <br></br>
            <div style={{ display: "inline-block", height: "5rem", background: "radial-gradient(rgb(2,2,70), transparent)" }}>
               <h2 className="two hide">
                  So wait for what? Join NOW.
               </h2>
            </div>
            <div>
               <Link to='/SignUp'>
               <button className="btn1 hide"><span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Sign Up</button>
               </Link>
            </div>

         </div>
      </div>)
}
export default Friends;