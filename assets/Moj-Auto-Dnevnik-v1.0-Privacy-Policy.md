# Moj Auto Dnevnik — Privacy Policy

**Application:** Moj Auto Dnevnik
**Package:** `app.mojautodnevnik`
**Public release:** v1.0 (`versionName` 1.0.0, `versionCode` 13)
**Platform:** Android (Capacitor)
**Document version:** 1.0
**Effective date:** 19.07.2026.
**Last updated:** 19.07.2026.

---

## 1. Summary

Moj Auto Dnevnik is a fully offline personal vehicle expense tracker. It does not use accounts, does not synchronize data to any server, and does not include analytics, advertising or tracking SDKs.

- No sign-up, no login, no user profile.
- All records — vehicles, fuel and charging entries, services, tires, registration, insurance, additional expenses, reminders, photos — are stored **only on your device**.
- The application makes exactly **one type of optional network request**: fetching the Official European Central Bank (ECB) daily reference exchange rates so that entries in foreign currencies can be converted to the vehicle's primary currency. This request is anonymous, contains no personal data, and can be avoided by using the app offline.
- The only Android permission the app requests is `INTERNET`, used solely for the exchange-rate refresh described above.

If you never enable an internet connection while using the app, no data of any kind leaves your device.

---

## 2. Who Is Responsible for Your Data

Because Moj Auto Dnevnik stores every record on your device, **you are the sole controller of your data**. The developer of the application does not receive, host, process or have any technical means to access your vehicles, expenses, photos, exports or backups.

---

## 3. What Data the Application Stores on Your Device

All of the following is stored locally in the application's own storage on your Android device. None of it is transmitted anywhere.

### 3.1 Vehicle information
- Name, make, model, year, engine, licence plate.
- Fuel/drivetrain type, tank or battery capacity, current odometer.
- Optional manufacturer recommendations (oil grade and capacity, coolant, tire pressures, recommended fuel, free-text notes).
- Optional vehicle photo. Photos are automatically compressed before being written to local storage.

### 3.2 Expense and maintenance records
- Fuel entries (station, location city and country, fuel type, litres, price, odometer, full-tank flag).
- Charging entries (kWh, price per kWh, total, location).
- Service entries (category, sub-category, cost, notes, optional service description for "Other").
- Tire entries (season, brand, size, service type, optional service description).
- Registration entries (dates, cost).
- Insurance entries (insurance company, policy number, type, dates, cost) — multiple independent policies per vehicle are supported.
- Additional expenses (fines, washes, tolls, parking, accessories and similar).
- Free-form notes attached to any entry.

### 3.3 Multi-currency data
For each money-related record the app stores the original amount, the original ISO 4217 currency, the exchange rate that was applied at the time of entry, the date of that rate, and its source (manual override, cached online rate, bundled static rate or identity). Historical rates are never rewritten by later refreshes.

### 3.4 Reminders
- Registration, insurance (per policy type), vignette, tire and service reminders.
- Reminder dates and/or odometer thresholds.
- Reminders are evaluated locally each time the app is opened; there are no push-notification servers.

### 3.5 Application settings
- Selected language (Serbian Latin, Serbian Cyrillic, Bosnian, Croatian, English, German).
- Vehicle primary currencies.
- Any user-defined manual exchange-rate overrides.

### 3.6 Generated files
- PDF exports (Service Book, Annual Report) are generated on the device.
- Calendar reminder exports use the ICS (iCalendar) format and are generated on the device.
- JSON backups created via Settings → Export are generated on the device.

Generated files are placed only where the user or the operating system chooses to save them (for example, the standard share sheet or the device's Downloads folder). The application does not upload them anywhere.

---

## 4. What the Application Does Not Collect

Moj Auto Dnevnik does **not** collect, transmit, sell or share:

- Personal identifiers (name, email, phone number, address, government ID, driver's licence number).
- User accounts, passwords, authentication tokens or biometric data.
- Precise or approximate device location (no GPS, no network-location, no Wi-Fi scanning, no cell-tower reads).
- Contacts, calendars, SMS, call logs or media outside what the user explicitly attaches as a vehicle photo.
- Device advertising identifiers (AAID / GAID).
- Analytics, crash telemetry, product-usage events or heat-maps.
- Marketing, advertising or attribution data.
- Payment information. The application does not process payments.

The application contains **no third-party analytics, advertising, tracking, A/B testing or session-replay SDKs**.

---

## 5. Network Activity

The only network activity performed by Moj Auto Dnevnik is fetching daily reference exchange rates from a public feed (the Official European Central Bank (ECB) daily reference exchange rates), used to convert amounts recorded in foreign currencies to the vehicle's primary currency.

Properties of this request:

- **Anonymous.** No account, device identifier, advertising ID, IP-based fingerprint, cookie or personal data is attached by the application.
- **Payload-free in the outbound direction.** The application does not send any user record, photo, filename, log or telemetry as part of the request.
- **Optional.** Every core feature works offline. If no exchange rate is available online, the app falls back to a cached rate, then to a static rate bundled with the app.
- **Historical safety.** Refreshing exchange rates never modifies previously saved entries. The rate that was in effect when each entry was created is stored with that entry.
- **Native transport.** On Android the request goes through the platform's native HTTP client to bypass a WebView CORS limitation; this does not add any tracking.

You can avoid this network activity entirely by keeping the device offline while using the application.

---

## 6. Android Permissions

The application declares a single permission in its Android manifest:

- `android.permission.INTERNET` — required by Android to allow the optional exchange-rate refresh described in §5.

The application does **not** declare, request or use `ACCESS_FINE_LOCATION`, `ACCESS_COARSE_LOCATION`, `READ_CONTACTS`, `READ_CALENDAR`, `READ_SMS`, `READ_CALL_LOG`, `CAMERA`, `RECORD_AUDIO`, `READ_MEDIA_IMAGES`, `READ_EXTERNAL_STORAGE`, `WRITE_EXTERNAL_STORAGE` or any background-location or advertising-ID permission.

Photos are attached by choosing an image through the standard Android system picker, which does not require a media or storage permission on supported Android versions.

---

## 7. Cookies, Local Storage and Similar Technologies

The application is packaged with Capacitor and uses the Android WebView to render its UI. It stores its own state in the WebView's local storage on your device. This storage is used exclusively to persist your vehicles, records and settings between sessions.

The application does **not** set advertising cookies, analytics cookies or any cross-site tracking identifiers.

---

## 8. Data Retention and Deletion

- Data remains on your device until you delete it.
- Individual entries can be edited or deleted at any time from their history view.
- To remove all data, uninstall the application or clear the application's storage from Android system settings.
- Application updates do not delete existing data.
- Because nothing is stored on a server, there is no server-side deletion request to make and no server-side copy to purge.

---

## 9. Backup, Export and Restore

- **Backup:** Settings → Export produces a JSON file containing all vehicles and records. The file is written to a location you choose through the Android share/save flow. Exported JSON backups may contain all application data and should be stored securely by the user.
- **Restore:** Settings → Import reads a previously exported JSON file with a merge strategy of your choice (newest wins, keep local, keep incoming).
- **PDF exports** and **ICS calendar files** are generated locally and shared through the Android share sheet.

Any file the application generates leaves the application's own storage only through an explicit user action. Once a file is saved to a cloud drive, email service or other third-party destination, that destination's own privacy policy applies to the copy stored there.

---

## 10. Children's Privacy

Moj Auto Dnevnik is intended for adult owners and drivers of motor vehicles. Because no personal information is collected or transmitted, the application does not knowingly collect any data — from children or from adults.

---

## 11. Security

- All records live inside the application's private storage on your Android device and are subject to Android's application sandboxing.
- The Android build disables mixed content and uses the HTTPS scheme for its WebView content.
- No credentials are stored in the application because there are no accounts.
- Because your data is stored on your device, its confidentiality depends primarily on the security of the device itself. We recommend using a device lock (PIN, pattern, biometrics) and keeping the operating system up to date.

---

## 12. International Users

The application ships with six locales — Serbian (Latin), Serbian (Cyrillic), Bosnian, Croatian, English and German — and is primarily intended for users in the Western Balkans and the DACH region (Germany, Austria and Switzerland). Because no personal data is transmitted or stored on a server, no cross-border data transfer takes place.

---

## 13. Your Rights

Since your data never leaves your device, you can exercise the following rights directly, without contacting us:

- **Access:** view every record inside the application or export a full JSON backup.
- **Rectification:** edit any entry from its history view.
- **Erasure:** delete individual entries, or clear all data by uninstalling the application or clearing its storage in Android settings.
- **Portability:** the JSON export is a machine-readable copy of everything the application stores.
- **Objection / restriction:** disable your device's internet connection to prevent even the optional exchange-rate refresh described in §5.

Where local law (for example, the EU GDPR or the Serbian Law on Personal Data Protection) grants additional rights, they apply — but in practice, because we neither collect nor process your data, most such rights are exercised directly on your device.

---

## 14. Changes to This Policy

If the application changes in a way that affects this policy (for example, adds a new optional network feature), the policy will be updated and the "Last updated" field at the top will be revised. The revised version applies to versions of the application released after that date.

---

## 15. Contact

**Contact email:** mojautodnevnik@gmail.com

For questions about this Privacy Policy or the application's privacy practices, please contact us at the email address above, or through the Google Play listing for Moj Auto Dnevnik.

---

© 2026 Moj Auto Dnevnik. All rights reserved.
