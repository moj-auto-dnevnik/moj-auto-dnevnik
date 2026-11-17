# Moj Auto Dnevnik — provera sajta v18

Provera izvršena 17.11.2026. Javno izdanje ostaje Android 1.3.1 / iOS 1.3.1. Datum politike ostaje 5. novembar 2026. prema zahtevu; ovo je datum usklađivanja opisa izdanja, ne datum ove tehničke provere.

## Tačno izmenjeno
- `privacy-policy.html`: isti odeljci i izgled; srpski, engleski i nemački sada preciziraju lokalnu evidenciju, korisnički odobrene kopije, direktni Wi-Fi prenos i automatsku sinhronizaciju posle uparivanja, prenos brisanja, lokalni identifikator uparivanja, odsustvo šifrovanja Wi-Fi sadržaja, zasebnu opcionu šifrovanu JSON kopiju, dozvole i sistemsku obradu govora, kalendar, sistemske kopije, mrežne zahteve za kurseve i privatnost sajta/e-pošte.
- `faq.html`: dopunjen samo postojeći odgovor o Wi-Fi sinhronizaciji na sva tri jezika.
- `README.md`: dodat kratak opis ove provere i ograničenja.
- `PROVERA-SAJTA-1.3.1.md`: ovaj novi izveštaj.
- `support.html` i `terms-of-use.html` pregledani, bez izmena: postojeće rečenice nisu obećavale šifrovanje prenosa ili isključivo ručno pokretanje svake sinhronizacije.

Originalni v17 ZIP ostaje za povratak. Početna strana, kontakt, 404, stilovi, skripte, slike, Apple/Google logotipi, cena, raspored, animacije i linkovi nisu promenjeni. Android/iOS aplikacije, potpisivanje, verzije i GitHub procesi nisu menjani. Sajt nije objavljen. Interna projektna evidencija zadatka izmenjena je odvojeno od sajta.

## Potvrđene tehničke činjenice
Provereni su isporučeni iOS izvorni ZIP 1.3.1 od 02.11.2026, Android radni ZIP kod24 od 04.11.2026 i relevantni postojeći izvori aplikacije.
- `src/lib/local-store.ts`: lokalna evidencija; osnovna upotreba ne zahteva korisnički nalog.
- `src/lib/lan-sync.ts`, `src/lib/lan-sync-core.ts`, native LanSync implementacije: direktni TCP prenos između uređaja; nema relejnog servera u ovom putu. Korisnik uparuje uređaje i bira vozila, a promene zatim mogu automatski da se prenesu pri čuvanju, povratku u aplikaciju i periodičnom radu aktivne aplikacije.
- Wi-Fi sadržaj je JSON tekst; HMAC-SHA256 proverava autentičnost, ne skriva sadržaj. Nije opravdana tvrdnja da je ovaj prenos šifrovan ili da pruža potpunu bezbednost.
- `src/lib/backup-restore.ts`: samo opciona kopija sa lozinkom koristi AES-GCM/PBKDF2 na uređaju; to ne šifruje osnovnu evidenciju ili Wi-Fi prenos.
- Manifest i iOS dozvole: mikrofon/govor, kamera za QR, lokalna mreža i kalendar. Nema zahteva za pristup lokaciji ili kontaktima u pregledanom aplikacijskom izvoru. To nije pregled konačnog spojenog manifesta iz prodavničkog paketa.
- Android koristi sistemski SpeechRecognizer; iOS ne zahteva lokalnu obradu u svakoj grani. Isključivo offline glasovno prepoznavanje nije potvrđeno.
- Android manifest ima `allowBackup=true`; stvarno ponašanje sistemskih kopija nije testirano. Kalendar može zavisiti od sistemskog naloga/izabranog izvora.
- ECB zahtev ne sadrži evidenciju; primaocu zahteva ipak su dostupni uobičajeni mrežni podaci.
- Statički sajt učitava lokalne skripte/fontove i pamti jezik u `mad-website-language` lokalnom prostoru pregledača. Nema analitičkih ili reklamnih skripti. Lovable Visitor analytics je isključen u projektu; taj opis se ne dodaje u politiku ovog samostalnog sajta.

## Izvršene provere
- 7 stranica × 3 jezika × 2 prikaza = 42 provere, Chromium: računar 1280×1800 i telefon 390×844.
- Pregledani snimci svih odeljaka (153 snimka, uključujući otvoreni izmenjeni FAQ odgovor). Apple i Google oznake prepoznatljive u obe pozicije na početnoj strani; logo sajta i slike prikazani. Dugački nemački naslov pravilno se prelama. Nema horizontalnog izlaska iz ekrana, neiscrtanih slika posle njihovog učitavanja, runtime grešaka ili neuspelih nezavršenih zahteva u konačnoj proveri. Prekinuti zahtevi usled navigacije nisu kvar resursa.
- Meni otvara/zatvara navigaciju na telefonu; izbor jezika radi. Prelazak sa početne na politiku zadržava engleski izbor, a promena na srpski radi.
- FAQ odgovor otvara se na sva tri jezika; pretraga nalazi rezultate i prikazuje prazno stanje kada ih nema.
- 6 galerijskih tokova: oba prikaza × 3 jezika; četiri početne slike, prikaz svih deset, učitavanje slika, uvećavanje, napred/nazad, Escape zatvaranje i povratak na četiri slike.
- Provereni lokalni `href`/`src`, sidra i postojeći linkovi dokumentacije. Nema linkova ka zasebnim PDF/Word uputstvima u v17, pa takva dokumentacija nije dodavana niti označena kao pregledana.
- Svih 11 različitih spoljnih href adresa vraća HTTP 200: oba store linka i postojeće GitHub canonical/hreflang adrese stranica. Store naslovi odgovaraju Moj Auto Dnevnik. HTTP 200 ne dokazuje pravnu usklađenost, vlasništvo adrese ili novu verziju na svakom tržištu.
- Svih sedam stranica imaju naslove, opise, og:title, og:description, og:type i twitter:card. Javne oznake izdanja ostaju 1.3.1; nazivi istorijskih fotografija nisu menjani.
- Konačni ZIP mora proći CRC, proveru spiska i ponovnog raspakivanja; sva 78 neizmenjena postojeća fajla ostaju identična v17, tri postojeća fajla menjaju se i jedan novi izveštaj dodaje se (82 fajla ukupno).

## Dodatna provera potrebna pre tvrdnje o usklađenosti
1. Google Play Data safety i App Store privacy prijave, objavljeni link politike, verzije i sadržaj stvarnih AAB/IPA paketa nisu pregledani. Uskladiti prijave sa sistemskim govorom, mrežnim zahtevima i direktnim deljenjem podataka; ova izmena nije potvrda Google Play odobrenja.
2. Test na pravim Android/iPhone telefonima i tabletima, govor na svakom jeziku, sistemski backup/restore i sinhronizacija kalendara nisu izvršeni. Provera sajta obuhvata njegova tri jezika, ne svih šest jezičkih/pisamskih prikaza aplikacije, koja nije menjana.
3. Izvorni folder `website/` u Lovable projektu znatno je stariji od v17 i nije zamenjen; ovaj ZIP je zasebna isporuka bazirana na v17. Preview i živi GitHub sajt nisu ažurirani.
4. Adresa `https://moj-auto-dnevnik.github.io/moj-auto-dnevnik/` dostupna je, ali README je označava privremenom. Potvrditi da je to željena konačna adresa pre njenog eventualnog menjanja.
5. Izjava na neizmenjenoj kontakt strani da aplikacija ne prikuplja/prenosi lične podatke ne predstavlja tehničku potvrdu ponašanja sistemske govorne usluge. Politika sada navodi izuzetke; eventualnu izmenu te široke formulacije na kontakt strani odobriti posebno jer nije bila u odobrenom spisku fajlova.
6. Pravila hosting/e-mail pružaoca, precizni rokovi čuvanja poruka podrške i sistemske kopije nisu dostupni iz sajta; nisu izmišljeni. Konačni pravni pregled ostaje odgovornost izdavača i njegovog pravnog savetnika.

## Javne Google Play smernice proverene
- https://support.google.com/googleplay/android-developer/answer/10144311?hl=en
- https://support.google.com/googleplay/android-developer/answer/10787469
- https://support.google.com/googleplay/android-developer/answer/9859455

Politika mora tačno opisati pristup, upotrebu i deljenje podataka i treće strane; Data safety prijava mora odgovarati stvarnom ponašanju distribuirane aplikacije. Sam lokalni način čuvanja nije dovoljan da se bez provere proglasi da nema nikakve spoljne obrade.
