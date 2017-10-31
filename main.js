//The function below helps you get the value of a state using the html <select></select> id
function get_state_value(state_element_id) {
    var state_value = document.getElementById(state_element_id).value;
    return state_value;
}

//The function below gets the Lga equivalent value using the state value
function get_lga(state, id) {
    var Abia_lga = '<option  value="" >Select a preferred LGA</option><option value="Aba_North">Aba North</option><option value="Aba_South">Aba South</option><option value="Arochukwu">Arochukwu</option><option value="Bende">Bende</option><option value="Ikwuano">Ikwuano</option><option value="Isiala_Ngwa_North">Isiala Ngwa North</option><option value="Isiala_Ngwa_South">Isiala Ngwa South</option><option value="Isuikwuato">Isuikwuato</option><option value="Obi_Ngwa">Obi Ngwa</option><option value="Ohafia">Ohafia</option><option value="Osisioma_Ngwa">Osisioma Ngwa</option><option value="Ugwunagbo">Ugwunagbo</option><option value="Ukwa_East">Ukwa East</option><option value="Ukwa_West">Ukwa West</option><option value="Umuahia_North">Umuahia North</option><option value="Umuahia_South">Umuahia South</option><option value="UmuNneochi">UmuNneochi</option>';
    var Abuja_lga = '<option  value="" >Select a preferred LGA</option><option value="Abaji">Abaji</option><option value="Abuja_Municipal">Abuja Municipal</option><option value="Gwagwalada">Gwagwalada</option><option value="Kuje">Kuje</option><option value="Bwari">Bwari</option><option value="Kwali">Kwali</option>';
    var Adamawa_lga = '<option  value="" >Select a preferred LGA</option><option value="Demsa">Demsa</option><option value="Fufore">Fufore</option><option value="Ganye">Ganye</option><option value="Girei">Girei</option><option value="Gombi">Gombi</option><option value="Guyuk">Guyuk</option><option value="Hong">Hong</option><option value="Jada">Jada</option><option value="Lamurde">Lamurde</option><option value="Madagali">Madagali</option><option value="Maiha">Maiha</option><option value="Mayo_Belwa">Mayo Belwa</option><option value="Michika">Michika</option><option value="Mubi_North">Mubi North</option><option value="Mubi_South">Mubi South</option><option value="Numan">Numan</option><option value="Shelleng">Shelleng</option><option value="Song">Song</option><option value="Toungo">Toungo</option><option value="Yola_North">Yola North</option><option value="Yola_South">Yola South</option>';
    var Anambra_lga = '<option  value="" >Select a preferred LGA</option><option value="Aguata">Aguata</option><option value="Awka_North">Awka North</option><option value="Awka_South">Awka South</option><option value="Anambra_East">Anambra East</option><option value="Anambra_West">Anambra West</option><option value="Anaocha">Anaocha</option><option value="Ayamelum">Ayamelum</option><option value="Dunukofia">Dunukofia</option><option value="Ekwusigo">Ekwusigo</option><option value="Idemili_North">Idemili North</option><option value="Idemili_South">Idemili South</option><option value="Ihiala">Ihiala</option><option value="Njikoka">Njikoka</option><option value="Nnewi_North">Nnewi North</option><option value="Nnewi_South">Nnewi South</option><option value="Ogbaru">Ogbaru</option><option value="Onitsha_North">Onitsha North</option><option value="Onitsha_South">Onitsha South</option><option value="Orumba_North">Orumba North</option><option value="Orumba_South">Orumba South</option><option value="Oyi">Oyi</option>';
    var Akwa_lga = '<option  value="" >Select a preferred LGA</option><option value="Abak">Abak</option><option value="Eastern_Obolo">Eastern Obolo</option><option value="Eket">Eket</option><option value="Esit_Eket">Esit Eket</option><option value="Essien_Udim">Essien Udim</option><option value="Etim-Ekpo">Etim-Ekpo</option><option value="Etinan">Etinan</option><option value="Ibeno">Ibeno</option><option value="Ibesikpo_Asutan">Ibesikpo Asutan</option><option value="Ibiono_Ibom">Ibiono Ibom</option><option value="Ika">Ika</option><option value="Ikono">Ikono</option><option value="Ikot_Abasi">Ikot Abasi</option><option value="Ikot_Ekpene">Ikot Ekpene</option><option value="Ini">Ini</option><option value="Itu">Itu</option><option value="Mbo">Mbo</option><option value="Mkpat_Enin">Mkpat Enin</option><option value="Nsit_Atai">Nsit Atai</option><option value="Nsit_Ibom">Nsit Ibom</option><option value="Nsit_Ubium">Nsit Ubium</option><option value="Obot_Akara">Obot Akara</option><option value="Okobo">Okobo</option><option value="Onna">Onna</option><option value="Oron">Oron</option><option value="Oruk_Anam">Oruk Anam</option><option value="Ukanafun">Ukanafun</option><option value="Udung_Uko">Udung Uko</option><option value="Uruan">Uruan</option><option value="Urue_Offong_Oruko">Urue Offong Oruko</option><option value="Uyo">Uyo</option>';
    var Bauchi_lga = '<option  value="" >Select a preferred LGA</option><option value="Alkaleri">Alkaleri</option><option value="Bauchi">Bauchi</option><option value="Bogoro">Bogoro</option><option value="Damban">Damban</option><option value="Darazo">Darazo</option><option value="Dass">Dass</option><option value="Gamawa">Gamawa</option><option value="Ganjuwa">Ganjuwa</option><option value="Giade">Giade</option><option value="Itas_Gadau">Itas/Gadau</option><option value="Jamaarev">Jamaare</option><option value="Katagum">Katagum</option><option value="Kirfi">Kirfi</option><option value="Misau">Misau</option><option value="Ningi">Ningi</option><option value="Shira">Shira</option><option value="Tafawa_Balewa">Tafawa Balewa</option><option value="Toro">Toro</option><option value="Warji">Warji</option><option value="Zaki">Zaki</option>';
    var Bayelsa_lga = '<option  value="" >Select a preferred LGA</option><option value="Brass">Brass</option><option value="Ekeremor">Ekeremor</option><option value="Kolokuma_Opokuma">Kolokuma Opokuma</option><option value="Nembe">Nembe</option><option value="Ogbia">Ogbia</option><option value="Sagbama">Sagbama</option><option value="Southern_Ijaw">Southern Ijaw</option><option value="Yenagoa">Yenagoa</option>';
    var Benue_lga = '<option  value="" >Select a preferred LGA</option><option value="Ado">Ado</option><option value="Agatu">Agatu</option><option value="Apa">Apa</option><option value="Buruku">Buruku</option><option value="Gboko">Gboko</option><option value="Guma">Guma</option><option value="Gwer_East">Gwer East</option><option value="Gwer_West">Gwer West</option><option value="Katsina_Ala">Katsina Ala</option><option value="Konshisha">Konshisha</option><option value="Kwande">Kwande</option><option value="Logo">Logo</option><option value="Makurdi">Makurdi</option><option value="Obi">Obi</option><option value="Ogbadibo">Ogbadibo</option><option value="Ohimini">Ohimini</option><option value="Oju">Oju</option><option value="Okpokwu">Okpokwu</option><option value="Otukpo">Otukpo</option><option value="Tarka">Tarka</option><option value="Ukum">Ukum</option><option value="Ushongo">Ushongo</option><option value="Vandeikya">Vandeikya</option>';
    var Borno_lga = '<option  value="" >Select a preferred LGA</option><option value="Abadam">Abadam</option><option value="Askira_Uba">Askira Uba</option><option value="Bama">Bama</option><option value="Bayo">Bayo</option><option value="Biu">Biu</option><option value="Chibok">Chibok</option><option value="Damboa">Damboa</option><option value="Dikwa">Dikwa</option><option value="Gubio">Gubio</option><option value="Guzamala">Guzamala</option><option value="Gwoza">Gwoza</option><option value="Hawul">Hawul</option><option value="Jere">Jere</option><option value="Kaga">Kaga</option><option value="Kala_Balge">Kala Balge</option><option value="Konduga">Konduga</option><option value="Kukawa">Kukawa</option><option value="Kwaya_Kusar">Kwaya Kusar</option><option value="Mafa">Mafa</option><option value="Magumeri">Magumeri</option><option value="Maiduguri">Maiduguri</option><option value="Marte">Marte</option><option value="Mobbar">Mobbar</option><option value="Monguno">Monguno</option><option value="Ngala">Ngala</option><option value="Nganzai">Nganzai</option><option value="Shani">Shani</option>';
    var CrossRiver_lga = '<option  value="" >Select a preferred LGA</option><option value="Abi">Abi</option><option value="Akamkpa">Akamkpa</option><option value="Akpabuyo">Akpabuyo</option><option value="Bakassi">Bakassi</option><option value="Bekwarra">Bekwarra</option><option value="Biase">Biase</option><option value="Boki">Boki</option><option value="Calabar_Municipal">Calabar Municipal</option><option value="Calabar_South">Calabar South</option><option value="Etung">Etung</option><option value="Ikom">Ikom</option><option value="Obanliku">Obanliku</option><option value="Obubra">Obubra</option><option value="Obudu">Obudu</option><option value="Odukpani">Odukpani</option><option value="Ogoja">Ogoja</option><option value="Yakuur">Yakuur</option><option value="Yala">Yala</option>';
    var Delta_lga = '<option  value="" >Select a preferred LGA</option><option value="Ethiope_East">Ethiope East</option><option value="Aniocha_North">Aniocha North</option><option value="Bomadi">Bomadi</option><option value="Ethiope_West">Ethiope West</option><option value="Aniocha_South">Aniocha South</option><option value="Burutu">Burutu</option><option value="Okpe">Okpe</option><option value="Ika_North_East">Ika North East</option><option value="Isoko_North">Isoko North</option><option value="Sapele">Sapele</option><option value="Ika_South">Ika South</option><option value="Isoko_South">Isoko South</option><option value="Udu">Udu</option><option value="Ndokwa_East">Ndokwa East</option><option value="Patani">Patani</option><option value="Ughelli_North">Ughelli North</option><option value="Ndokwa_West">Ndokwa West</option><option value="Warri_North">Warri North</option><option value="Ughelli_South">Ughelli South</option><option value="Oshimili_North">Oshimili North</option><option value="Warri_South">Warri South</option><option value="Uvwie">Uvwie</option><option value="Oshimili_South">Oshimili South</option><option value="Warri_South_West">Warri South West</option><option value="Ukwuani">Ukwuani</option>';
    var Ebonyi_lga = '<option  value="" >Select a preferred LGA</option><option value="Abakaliki">Abakaliki</option><option value="Afikpo_North">Afikpo North</option><option value="Afikpo_South">Afikpo South</option><option value="Ebonyi">Ebonyi</option><option value="Ezza_North">Ezza North</option><option value="Ezza_South">Ezza South</option><option value="Ikwo">Ikwo</option><option value="Ishielu">Ishielu</option><option value="Ivo">Ivo</option><option value="Izzi">Izzi</option><option value="Ohaozara">Ohaozara</option><option value="Ohaukwu">Ohaukwu</option><option value="Onicha">Onicha</option>';
    var Enugu_lga = '<option  value="" >Select a preferred LGA</option><option value="Aninri">Aninri</option><option value="Awgu">Awgu</option><option value="Enugu_East">Enugu East</option><option value="Enugu_North">Enugu North</option><option value="Enugu_South">Enugu South</option><option value="Ezeagu">Ezeagu</option><option value="Igbo_Etiti">Igbo Etiti</option><option value="Igbo_Eze_North">Igbo Eze North</option><option value="Igbo_Eze_South">Igbo Eze South</option><option value="Isi_Uzo">Isi Uzo</option><option value="Nkanu_East">Nkanu East</option><option value="Nkanu_West">Nkanu West</option><option value="Nsukka">Nsukka</option><option value="Oji_River">Oji River</option><option value="Udenu">Udenu</option><option value="Udi">Udi</option><option value="Uzo_Uwani">Uzo Uwani</option>';
    var Edo_lga = '<option  value="" >Select a preferred LGA</option><option value="Akoko_Edo">Akoko Edo</option><option value="Egor">Egor</option><option value="Esan_Central">Esan Central</option><option value="Esan_North_East">Esan North East</option><option value="Esan_South_East">Esan South East</option><option value="Esan_West">Esan West</option><option value="Etsako_Central">Etsako Central</option><option value="Etsako_East">Etsako East</option><option value="Etsako_West">Etsako West</option><option value="Igueben">Igueben</option><option value="Ikpoba_Okha">Ikpoba Okha</option><option value="Oredo">Oredo</option><option value="Orhionmwon">Orhionmwon</option><option value="Ovia_North_East">Ovia North East</option><option value="Ovia_South_West">Ovia South West</option><option value="Owan_East">Owan East</option><option value="Owan_West">Owan West</option><option value="Uhunmwonde">Uhunmwonde</option>';
    var Ekiti_lga = '<option  value="" >Select a preferred LGA</option><option value="Ado_Ekiti">Ado Ekiti</option><option value="Ikere">Ikere</option><option value="Oye">Oye</option><option value="Aiyekire">Aiyekire</option><option value="Efon">Efon</option><option value="Ekiti_East">Ekiti East</option><option value="Ekiti_South_West">Ekiti South West</option><option value="Ekiti_West">Ekiti West</option><option value="Emure">Emure</option><option value="Ido_Osi">Ido Osi</option><option value="Ijero">Ijero</option><option value="Ikole">Ikole</option><option value="Ilejemeje">Ilejemeje</option><option value="Irepodun_Ifelodun">Irepodun/Ifelodun</option><option value="Ise_Orun">Ise/Orun</option><option value="Moba">Moba</option>';
    var Gombe_lga = '<option  value="" >Select a preferred LGA</option><option value="Akko">Akko</option><option value="Balanga">Balanga</option><option value="Billiri">Billiri</option><option value="Dukku">Dukku</option><option value="Funakaye">Funakaye</option><option value="Gombe">Gombe</option><option value="Kaltungo">Kaltungo</option><option value="Kwami">Kwami</option><option value="Nafada">Nafada</option><option value="Shongom">Shongom</option><option value="Yamaltu_Deba">Yamaltu/Deba</option>';
    var Imo_lga = '<option  value="" >Select a preferred LGA</option><option value="Aboh_Mbaise">Aboh Mbaise</option><option value="Ahiazu_Mbaise">Ahiazu Mbaise</option><option value="Ehime_Mbano">Ehime Mbano</option><option value="Ezinihitte_Mbaise">Ezinihitte Mbaise</option><option value="Ideato_North">Ideato North</option><option value="Ideato_South">Ideato South</option><option value="Ihitte_Uboma">Ihitte/Uboma</option><option value="Ikeduru">Ikeduru</option><option value="Isiala_Mbano">Isiala Mbano</option><option value="Isu">Isu</option><option value="Mbaitoli">Mbaitoli</option><option value="Ngor_Okpala">Ngor Okpala</option><option value="Njaba">Njaba</option><option value="Nkwerre">Nkwerre</option><option value="Nwangele">Nwangele</option><option value="Obowo">Obowo</option><option value="Oguta">Oguta</option><option value="Ohaji_Egbema">Ohaji Egbema</option><option value="Okigwe">Okigwe</option><option value="Onuimo">Onuimo</option><option value="Orlu">Orlu</option><option value="Orsu">Orsu</option><option value="Oru_East">Oru East</option><option value="Oru_West">Oru West</option><option value="Owerri_Municipal">Owerri Municipal</option><option value="Owerri_North">Owerri North</option><option value="Owerri_West">Owerri West</option>';
    var Jigawa_lga = '<option  value="" >Select a preferred LGA</option><option value="Auyo">Auyo</option><option value="Babura">Babura</option><option value="Biriniwa">Biriniwa</option><option value="Birnin_Kudu">Birnin Kudu</option><option value="Buji">Buji</option><option value="Dutse">Dutse</option><option value="Gagarawa">Gagarawa</option><option value="Garki">Garki</option><option value="Gumel">Gumel</option><option value="Guri">Guri</option><option value="Gwaram">Gwaram</option><option value="Gwiwa">Gwiwa</option><option value="Hadejia">Hadejia</option><option value="Jahun">Jahun</option><option value="Kafin_Hausa">Kafin Hausa</option><option value="Kaugama">Kaugama</option><option value="Kazaure">Kazaure</option><option value="Kiri_Kasama">Kiri Kasama</option><option value="Kiyawa">Kiyawa</option><option value="Maigatari">Maigatari</option><option value="Malam_Madori">Malam Madori</option><option value="Miga">Miga</option><option value="Ringim">Ringim</option><option value="Roni">Roni</option><option value="Sule_Tankarkar">Sule Tankarkar</option><option value="Taura">Taura</option><option value="Yankwashi">Yankwashi</option>';
    var Kaduna_lga = '<option  value="" >Select a preferred LGA</option><option value="Birnin_Gwari">Birnin Gwari</option><option value="Chikun">Chikun</option><option value="Giwa">Giwa</option><option value="Igabi">Igabi</option><option value="Ikara">Ikara</option><option value="Jaba">Jaba</option><option value="Jemaa">Jemaa</option><option value="Kachia">Kachia</option><option value="Kaduna_North">Kaduna North</option><option value="Kaduna_South">Kaduna South</option><option value="Kagarko">Kagarko</option><option value="Kajuru">Kajuru</option><option value="Kaura">Kaura</option><option value="Kauru">Kauru</option><option value="Kubau">Kubau</option><option value="Kudan">Kudan</option><option value="Lere">Lere</option><option value="Makarfi">Makarfi</option><option value="Sabon_Gari">Sabon Gari</option><option value="Sanga">Sanga</option><option value="Soba">Soba</option><option value="Zangon_Kataf">Zangon Kataf</option><option value="Zaria">Zaria</option>';
    var Kano_lga = '<option  value="" >Select a preferred LGA</option><option value="Ajingi">Ajingi</option><option value="Albasu">Albasu</option><option value="Bagwai">Bagwai</option><option value="Bebeji">Bebeji</option><option value="Bichi">Bichi</option><option value="Bunkure">Bunkure</option><option value="Dala">Dala</option><option value="Dambatta">Dambatta</option><option value="Dawakin_Kudu">Dawakin Kudu</option><option value="Dawakin_Tofa">Dawakin Tofa</option><option value="Doguwa">Doguwa</option><option value="Fagge">Fagge</option><option value="Gabasawa">Gabasawa</option><option value="Garko">Garko</option><option value="Garum_Mallam">Garum Mallam</option><option value="Gaya">Gaya</option><option value="Gezawa">Gezawa</option><option value="Gwale">Gwale</option><option value="Gwarzo">Gwarzo</option><option value="Kabo">Kabo</option><option value="Kano_Municipal">Kano Municipal</option><option value="Karaye">Karaye</option><option value="Kibiya">Kibiya</option><option value="Kiru">Kiru</option><option value="kumbotso">kumbotso</option><option value="Kunchi">Kunchi</option><option value="Kura">Kura</option><option value="Madobi">Madobi</option><option value="Makoda">Makoda</option><option value="Minjibir">Minjibir</option><option value="Nasarawa">Nasarawa</option><option value="Rano">Rano</option><option value="Rimin_Gado">Rimin Gado</option><option value="Rogo">Rogo</option><option value="Shanono">Shanono</option><option value="Sumaila">Sumaila</option><option value="Takai">Takai</option><option value="Tarauni">Tarauni</option><option value="Tofa">Tofa</option><option value="Tsanyawa">Tsanyawa</option><option value="Tudun_Wada">Tudun Wada</option><option value="Ungogo">Ungogo</option><option value="Warawa">Warawa</option><option value="Wudil">Wudil</option>';
    var Katsina_lga = '<option  value="" >Select a preferred LGA</option><option value="Bakori">Bakori</option><option value="Batagarawa">Batagarawa</option><option value="Batsari">Batsari</option><option value="Baure">Baure</option><option value="Bindawa">Bindawa</option><option value="Charanchi">Charanchi</option><option value="Dan_Musa">Dan Musa</option><option value="Dandume">Dandume</option><option value="Danja">Danja</option><option value="Daura">Daura</option><option value="Dutsi">Dutsi</option><option value="Dutsin_Ma">Dutsin Ma</option><option value="Faskari">Faskari</option><option value="Funtua">Funtua</option><option value="Ingawa">Ingawa</option><option value="Jibia">Jibia</option><option value="Kafur">Kafur</option><option value="Kaita">Kaita</option><option value="Kankara">Kankara</option><option value="Kankia">Kankia</option><option value="Katsina">Katsina</option><option value="Kurfi">Kurfi</option><option value="Kusada">Kusada</option><option value="MaiAdua">Mai Adua</option><option value="Malumfashi">Malumfashi</option><option value="Mani">Mani</option><option value="Mashi">Mashi</option><option value="Matazu">Matazu</option><option value="Musawa">Musawa</option><option value="Rimi">Rimi</option><option value="Sabuwa">Sabuwa</option><option value="Safana">Safana</option><option value="Sandamu">Sandamu</option><option value="Zango">Zango</option>';
    var Kebbi_lga = '<option  value="" >Select a preferred LGA</option><option value="Aleiro">Aleiro</option><option value="Arewa_Dandi">Arewa Dandi</option><option value="Argungu">Argungu</option><option value="Augie">Augie</option><option value="Bagudo">Bagudo</option><option value="Birnin_Kebbi">Birnin Kebbi</option><option value="Bunza">Bunza</option><option value="Dandi">Dandi</option><option value="Fakai">Fakai</option><option value="Gwandu">Gwandu</option><option value="Jega">Jega</option><option value="Kalgo">Kalgo</option><option value="Koko_Besse">Koko Besse</option><option value="Maiyama">Maiyama</option><option value="Ngaski">Ngaski</option><option value="Sakaba">Sakaba</option><option value="Shanga">Shanga</option><option value="Suru">Suru</option><option value="Danko_Wasagu">Danko Wasagu</option><option value="Yauri">Yauri</option><option value="Zuru">Zuru</option>';
    var Kogi_lga = '<option  value="" >Select a preferred LGA</option><option value="Adavi">Adavi</option><option value="Ajaokuta">Ajaokuta</option><option value="Ankpa">Ankpa</option><option value="Bassa">Bassa</option><option value="Dekina">Dekina</option><option value="Ibaji">Ibaji</option><option value="Idah">Idah</option><option value="Igalamela_Odolu">Igalamela Odolu</option><option value="Ijumu">Ijumu</option><option value="Kabba_Bunu">Kabba/Bunu</option><option value="Koton_Karfe">Koton Karfe</option><option value="Lokoja">Lokoja</option><option value="Mopa_Muro">Mopa Muro</option><option value="Ofu">Ofu</option><option value="Ogori_Magongo">Ogori/Magongo</option><option value="Okehi">Okehi</option><option value="Okene">Okene</option><option value="Olamaboro">Olamaboro</option><option value="Omala">Omala</option><option value="Yagba_East">Yagba East</option><option value="Yagba_West">Yagba West</option>';
    var Kwara_lga = '<option  value="" >Select a preferred LGA</option><option value="Asa">Asa</option><option value="Baruten">Baruten</option><option value="Edu">Edu</option><option value="Ekiti">Ekiti</option><option value="Ifelodun">Ifelodun</option><option value="Ilorin_East">Ilorin East</option><option value="Ilorin_South">Ilorin South</option><option value="Ilorin_West">Ilorin West</option><option value="Irepodun">Irepodun</option><option value="Isin">Isin</option><option value="Kaiama">Kaiama</option><option value="Moro">Moro</option><option value="Offa">Offa</option><option value="Oke_Ero">Oke Ero</option><option value="Oyun">Oyun</option><option value="Pategi">Pategi</option>';
    var Lagos_lga = '<option  value="" >Select a preferred LGA</option><option value="Alimosho">Alimosho</option><option value="Ajeromi_Ifelodun">Ajeromi Ifelodun</option><option value="Kosofe">Kosofe</option><option value="Mushin">Mushin</option><option value="Oshodi_Isolo">Oshodi Isolo</option><option value="Ojo">Ojo</option><option value="Ikorodu">Ikorodu</option><option value="Surulere">Surulere</option><option value="Agege">Agege</option><option value="Ifako_Ijaiye">Ifako Ijaiye</option><option value="Shomolu">Shomolu</option><option value="Amuwo_Odofin">Amuwo Odofin</option><option value="Lagos_Mainland">Lagos-Mainland</option><option value="Ikeja">Ikeja</option><option value="Eti_Osa">Eti Osa</option><option value="Badagry">Badagry</option><option value="Apapa">Apapa</option><option value="Lagos_Island">Lagos-Island</option><option value="Epe">Epe</option><option value="Ibeju_Lekki">Ibeju Lekki</option>';
    var Nasarawa_lga = '<option  value="" >Select a preferred LGA</option><option value="Karu">Karu</option><option value="Akwanga">Akwanga</option><option value="Awe">Awe</option><option value="Keffi">Keffi</option><option value="Nasarawa_Egon">Nasarawa Egon</option><option value="Doma">Doma</option><option value="Kokona">Kokona</option><option value="Wamba">Wamba</option><option value="Keana">Keana</option><option value="Nasarawa">Nasarawa</option><option value="Lafia">Lafia</option><option value="Toto">Toto</option><option value="Obi">Obi</option>';
    var Niger_lga = '<option  value="" >Select a preferred LGA</option><option value="Agaie">Agaie</option><option value="Agwara">Agwara</option><option value="Bida">Bida</option><option value="Borgu">Borgu</option><option value="Bosso">Bosso</option><option value="Chanchaga">Chanchaga</option><option value="Edati">Edati</option><option value="Gbako">Gbako</option><option value="Gurara">Gurara</option><option value="Katcha">Katcha</option><option value="Kontagora">Kontagora</option><option value="Lapai">Lapai</option><option value="Lavun">Lavun</option><option value="Magama">Magama</option><option value="Mariga">Mariga</option><option value="Mashegu">Mashegu</option><option value="Mokwa">Mokwa</option><option value="Munya">Munya</option><option value="Paikoro">Paikoro</option><option value="Rafi">Rafi</option><option value="Rijau">Rijau</option><option value="Shiroro">Shiroro</option><option value="Suleja">Suleja</option><option value="Tafa">Tafa</option><option value="Wushishi">Wushishi</option>';
    var Ogun_lga = '<option  value="" >Select a preferred LGA</option><option value="Abeokuta_North">Abeokuta North</option><option value="Abeokuta_South">Abeokuta South</option><option value="Ado_Odo_Ota">Ado Odo Ota</option><option value="Ewekoro">Ewekoro</option><option value="Ifo">Ifo</option><option value="Ijebu_East">Ijebu East</option><option value="Ijebu_North">Ijebu North</option><option value="Ijebu_North_East">Ijebu North-East</option><option value="Ijebu_Ode">Ijebu Ode</option><option value="Ikenne">Ikenne</option><option value="Imeko_Afon">Imeko Afon</option><option value="Ipokia">Ipokia</option><option value="Obafemi_Owode">Obafemi Owode</option><option value="Odogbolu">Odogbolu</option><option value="Odeda">Odeda</option><option value="Ogun_Waterside">Ogun Waterside</option><option value="Remo_North">Remo North</option><option value="Sagamu">Sagamu</option><option value="Yewa_North">Yewa North</option><option value="Yewa_South">Yewa South</option>';
    var Ondo_lga = '<option  value="" >Select a preferred LGA</option><option value="Akoko_North_East">Akoko North East</option><option value="Akoko_North_West">Akoko North West</option><option value="Akoko_South_East">Akoko South East</option><option value="Akoko_South_West">Akoko South West</option><option value="Akure_North">Akure North</option><option value="Akure_South">Akure South</option><option value="Ese_Odo">Ese Odo</option><option value="Idanre">Idanre</option><option value="Ifedore">Ifedore</option><option value="Ilaje">Ilaje</option><option value="Ile_Oluji_Okeigbo">Ile Oluji/Okeigbo</option><option value="Irele">Irele</option><option value="Odigbo">Odigbo</option><option value="Okitipupa">Okitipupa</option><option value="Ondo_East">Ondo East</option><option value="Ondo_West">Ondo West</option><option value="Ose">Ose</option><option value="Owo">Owo</option>';
    var Osun_lga = '<option  value="" >Select a preferred LGA</option><option value="Aiyedaade">Aiyedaade</option><option value="Aiyedire">Aiyedire</option><option value="Atakunmosa_East">Atakunmosa East</option><option value="Atakunmosa_West">Atakunmosa West</option><option value="Boluwaduro">Boluwaduro</option><option value="Boripe">Boripe</option><option value="Ede_North">Ede North</option><option value="Ede_South">Ede South</option><option value="Egbedore">Egbedore</option><option value="Ejigbo">Ejigbo</option><option value="Ife_Central">Ife Central</option><option value="Ife_East">Ife East</option><option value="Ife_North">Ife North</option><option value="Ife_South">Ife South</option><option value="Ifedayo">Ifedayo</option><option value="Ifelodun">Ifelodun</option><option value="Ila">Ila</option><option value="Ilesa_East">Ilesa East</option><option value="Ilesa_West">Ilesa West</option><option value="Irepodun">Irepodun</option><option value="Irewole">Irewole</option><option value="Isokan">Isokan</option><option value="Iwo">Iwo</option><option value="Obokun">Obokun</option><option value="Odo_Otin">Odo Otin</option><option value="Ola_Oluwa">Ola Oluwa</option><option value="Olorunda">Olorunda</option><option value="Oriade">Oriade</option><option value="Orolu">Orolu</option><option value="Osogbo">Osogbo</option>';
    var Oyo_lga = '<option  value="" >Select a preferred LGA</option><option value="Akinyele">Akinyele</option><option value="Afijio">Afijio</option><option value="Egbeda">Egbeda</option><option value="Ibadan_North">Ibadan North</option><option value="Ibadan_North_East">Ibadan North-East</option><option value="Ibadan_North_West">Ibadan North-West</option><option value="Ibadan_South_West">Ibadan South-West</option><option value="Ibadan_South_East">Ibadan South-East</option><option value="Ibarapa_Central">Ibarapa Central</option><option value="Ibarapa_East">Ibarapa East</option><option value="Ido">Ido</option><option value="Irepo">Irepo</option><option value="Iseyin">Iseyin</option><option value="Kajola">Kajola</option><option value="Lagelu">Lagelu</option><option value="Ogbomosho_North">Ogbomosho North</option><option value="Ogbomosho_South">Ogbomosho South</option><option value="Oyo_West">Oyo West</option><option value="Atiba">Atiba</option><option value="Atisbo">Atisbo</option><option value="Saki_West">Saki West</option><option value="Saki_East">Saki East</option><option value="Itesiwaju">Itesiwaju</option><option value="Iwajowa">Iwajowa</option><option value="Ibarapa_North">Ibarapa North</option><option value="Olorunsogo">Olorunsogo</option><option value="Oluyole">Oluyole</option><option value="Ogo_Oluwa">Ogo Oluwa</option><option value="Surulere">Surulere</option><option value="Orelope">Orelope</option><option value="Ori_Ire">Ori Ire</option><option value="Oyo_East">Oyo East</option><option value="Ona_Ara">Ona Ara</option>';
    var Plateau_lga = '<option  value="" >Select a preferred LGA</option><option value="Barkin_Ladi">Barkin Ladi</option><option value="Bassa">Bassa</option><option value="Bokkos">Bokkos</option><option value="Jos_East">Jos East</option><option value="Jos_North">Jos North</option><option value="Jos_South">Jos South</option><option value="Kanam">Kanam</option><option value="Kanke">Kanke</option><option value="Langtang_North">Langtang North</option><option value="Langtang_South">Langtang South</option><option value="Mangu">Mangu</option><option value="Mikang">Mikang</option><option value="Pankshin">Pankshin</option><option value="Quaan_Pan">Quaan Pan</option><option value="Riyom">Riyom</option><option value="Shendam">Shendam</option><option value="Wase">Wase</option>';
    var Rivers_lga = '<option  value="" >Select a preferred LGA</option><option value="Abua_Odual">Abua/Odual</option><option value="Emohua">Emohua</option><option value="Ogu_Bolo">Ogu/Bolo</option><option value="Ahoada_East">Ahoada East</option><option value="Eleme">Eleme</option><option value="Okrika">Okrika</option><option value="Ahoada_West">Ahoada West</option><option value="Etche">Etche</option><option value="Omumma">Omumma</option><option value="Akuku_Toru">Akuku Toru</option><option value="Gokana">Gokana</option><option value="Opobo_Nkoro">Opobo/Nkoro</option><option value="Andoni">Andoni</option><option value="Ikwerre">Ikwerre</option><option value="Oyigbo">Oyigbo</option><option value="Asari_Toru">Asari-Toru</option><option value="Khana">Khana</option><option value="Port_Harcourt">Port-Harcourt</option><option value="Bonny">Bonny</option><option value="Obi_Akpor">Obi/Akpor</option><option value="Tai">Tai</option><option value="Degema">Degema</option><option value="Ogba_Egbema_Ndoni">Ogba/Egbema/Ndoni</option>';
    var Sokoto_lga = '<option  value="" >Select a preferred LGA</option><option value="Binji">Binji</option><option value="Bodinga">Bodinga</option><option value="Dange_Shuni">Dange Shuni</option><option value="Gada">Gada</option><option value="Goronyo">Goronyo</option><option value="Gudu">Gudu</option><option value="Gwadabawa">Gwadabawa</option><option value="Illela">Illela</option><option value="Isa">Isa</option><option value="Kebbe">Kebbe</option><option value="Kware">Kware</option><option value="Rabah">Rabah</option><option value="Sabon_Birni">Sabon Birni</option><option value="Shagari">Shagari</option><option value="Silame">Silame</option><option value="Sokoto_North">Sokoto North</option><option value="Sokoto_South">Sokoto South</option><option value="Tambuwal">Tambuwal</option><option value="Tangaza">Tangaza</option><option value="Tureta">Tureta</option><option value="Wamako">Wamako</option><option value="Wurno">Wurno</option><option value="Yabo">Yabo</option>';
    var Taraba_lga = '<option  value="" >Select a preferred LGA</option><option value="Ardo_Kola">Ardo Kola</option><option value="Bali">Bali</option><option value="Donga">Donga</option><option value="Gashaka">Gashaka</option><option value="Gassol">Gassol</option><option value="Ibi">Ibi</option><option value="Jalingo">Jalingo</option><option value="Karim_Lamido">Karim Lamido</option><option value="Kurmi">Kurmi</option><option value="Lau">Lau</option><option value="Sardauna">Sardauna</option><option value="Takum">Takum</option><option value="Ussa">Ussa</option><option value="Wukari">Wukari</option><option value="Yorro">Yorro</option><option value="Zing">Zing</option>';
    var Yobe_lga = '<option  value="" >Select a preferred LGA</option><option value="Bade">Bade</option><option value="Bursari">Bursari</option><option value="Damaturu">Damaturu</option><option value="Geidam">Geidam</option><option value="Gujba">Gujba</option><option value="Gulani">Gulani</option><option value="Fika">Fika</option><option value="Fune">Fune</option><option value="Jakusko">Jakusko</option><option value="Karasuwa">Karasuwa</option><option value="Machina">Machina</option><option value="Nangere">Nangere</option><option value="Nguru">Nguru</option><option value="Potiskum">Potiskum</option><option value="Tarmuwa">Tarmuwa</option><option value="Yunusari">Yunusari</option><option value="Yusufari">Yusufari</option>';
    var Zamfara_lga = '<option  value="" >Select a preferred LGA</option><option value="Anka">Anka</option><option value="Bakura">Bakura</option><option value="Birnin_Magaji_Kiyaw">Birnin Magaji/Kiyaw</option><option value="Bukkuyum">Bukkuyum</option><option value="Bungudu">Bungudu</option><option value="Tsafe">Tsafe</option><option value="Gummi">Gummi</option><option value="Gusau">Gusau</option><option value="Kaura_Namoda">Kaura Namoda</option><option value="Maradun">Maradun</option><option value="Maru">Maru</option><option value="Shinkafi">Shinkafi</option><option value="Talata_Mafara">Talata Mafara</option><option value="Zurmi">Zurmi</option>';
    var no_state_selected = '<option value="">Select a preferred LGA</option>';
    var stateval = state;
    if (stateval == "") {
        document.getElementById(id).innerHTML = no_state_selected;
    }
    if (stateval == "Abia_state") {
        document.getElementById(id).innerHTML = Abia_lga;
    }
    if (stateval == "Abuja_fct") {
        document.getElementById(id).innerHTML = Abuja_lga;
    }
    if (stateval == "Adamawa_state") {
        document.getElementById(id).innerHTML = Adamawa_lga;
    }
    if (stateval == "Anambra_state") {
        document.getElementById(id).innerHTML = Anambra_lga;
    }
    if (stateval == "Akwa_Ibom_state") {
        document.getElementById(id).innerHTML = Akwa_lga;
    }
    if (stateval == "Bauchi_state") {
        document.getElementById(id).innerHTML = Bauchi_lga;
    }
    if (stateval == "Bayelsa_state") {
        document.getElementById(id).innerHTML = Bayelsa_lga;
    }
    if (stateval == "Benue_state") {
        document.getElementById(id).innerHTML = Benue_lga;
    }
    if (stateval == "Borno_state") {
        document.getElementById(id).innerHTML = Borno_lga;
    }
    if (stateval == "CrossRiver_state") {
        document.getElementById(id).innerHTML = CrossRiver_lga;
    }
    if (stateval == "Delta_state") {
        document.getElementById(id).innerHTML = Delta_lga;
    }
    if (stateval == "Ebonyi_state") {
        document.getElementById(id).innerHTML = Ebonyi_lga;
    }
    if (stateval == "Enugu_state") {
        document.getElementById(id).innerHTML = Enugu_lga;
    }
    if (stateval == "Edo_state") {
        document.getElementById(id).innerHTML = Edo_lga;
    }
    if (stateval == "Ekiti_state") {
        document.getElementById(id).innerHTML = Ekiti_lga;
    }
    if (stateval == "Gombe_state") {
        document.getElementById(id).innerHTML = Gombe_lga;
    }
    if (stateval == "Imo_state") {
        document.getElementById(id).innerHTML = Imo_lga;
    }
    if (stateval == "Jigawa_state") {
        document.getElementById(id).innerHTML = Jigawa_lga;
    }
    if (stateval == "Kaduna_state") {
        document.getElementById(id).innerHTML = Kaduna_lga;
    }
    if (stateval == "Kano_state") {
        document.getElementById(id).innerHTML = Kano_lga;
    }
    if (stateval == "Katsina_state") {
        document.getElementById(id).innerHTML = Katsina_lga;
    }
    if (stateval == "Kebbi_state") {
        document.getElementById(id).innerHTML = Kebbi_lga;
    }
    if (stateval == "Kogi_state") {
        document.getElementById(id).innerHTML = Kogi_lga;
    }
    if (stateval == "Kwara_state") {
        document.getElementById(id).innerHTML = Kwara_lga;
    }
    if (stateval == "Lagos_state") {
        document.getElementById(id).innerHTML = Lagos_lga;
    }
    if (stateval == "Nasarawa_state") {
        document.getElementById(id).innerHTML = Nasarawa_lga;
    }
    if (stateval == "Niger_state") {
        document.getElementById(id).innerHTML = Niger_lga;
    }
    if (stateval == "Ogun_state") {
        document.getElementById(id).innerHTML = Ogun_lga;
    }
    if (stateval == "Ondo_state") {
        document.getElementById(id).innerHTML = Ondo_lga;
    }
    if (stateval == "Osun_state") {
        document.getElementById(id).innerHTML = Osun_lga;
    }
    if (stateval == "Oyo_state") {
        document.getElementById(id).innerHTML = Oyo_lga;
    }
    if (stateval == "Plateau_state") {
        document.getElementById(id).innerHTML = Plateau_lga;
    }
    if (stateval == "Rivers_state") {
        document.getElementById(id).innerHTML = Rivers_lga;
    }
    if (stateval == "Sokoto_state") {
        document.getElementById(id).innerHTML = Sokoto_lga;
    }
    if (stateval == "Taraba_state") {
        document.getElementById(id).innerHTML = Taraba_lga;
    }
    if (stateval == "Yobe_state") {
        document.getElementById(id).innerHTML = Yobe_lga;
    }
    if (stateval == "Zamfara_state") {
        document.getElementById(id).innerHTML = Zamfara_lga;
    }

}


//The function below helps cancel a timed alert
function cancel_timed_alert(element_id, interval_variable) {
    clearInterval(interval_variable);
    cancel_alert(element_id);
}

//The function below helps generate any kind of alert 
function generate_alert(error_message, element_id, text_color) {
    var ToElement = document.getElementById(element_id);
    ToElement.innerHTML = error_message;
    ToElement.style.color = text_color;
}

//The function below helps cancel a generated alert
function cancel_alert(element_id) {
    var ToElement = document.getElementById(element_id);
    ToElement.innerHTML = "";
    ToElement.style.color = "";
}

//The function below helps get an element
function get_element(element_id) {
    var element = document.getElementById(element_id);
    return element;
}

//The function below gets an element value
function get_element_value(element_id) {
    var element = document.getElementById(element_id).value;
    return element;
}



function focus_(instruction_text, instruction_id, instruction_color, count_id) {
    generate_alert(instruction_text, instruction_id, instruction_color);
    cancel_alert(count_id);
}

function blur_(instruction_id) {
    cancel_alert(instruction_id);

}





function keyup_(interval_time, instruction_id, instruction_id_color, instruction_text, form_input_id, number_of_allowed_characters, count_id, count_id_color, count_exceeded_color, status_id, status_color_zero, status_text_zero, status_color_success, status_text_success, status_color_not_success, status_text_not_success, regex) {

    var interval = setInterval(evaluate_all(instruction_id, instruction_id_color, instruction_text, form_input_id, number_of_allowed_characters, count_id, count_id_color, count_exceeded_color, status_id, status_color_zero, status_text_zero, status_color_success, status_text_success, status_color_not_success, status_text_not_success, regex), interval_time);

}






function evaluate_all(instruction_id, instruction_id_color, instruction_text, form_input_id, number_of_allowed_characters, count_id, count_id_color, count_exceeded_color, status_id, status_color_zero, status_text_zero, status_color_success, status_text_success, status_color_not_success, status_text_not_success, regex) {
    cancel_alert(instruction_id);
    var get_name_value = get_element_value(form_input_id);
    var name_length = get_name_value.length;
    var number_of_characters = number_of_allowed_characters;
    var length_count = number_of_characters - name_length;
    if (length_count < 0) {
        generate_alert("Error character range of " + number_of_characters + " exceeded", count_id, count_exceeded_color);

    } else {
        generate_alert(length_count + " characters remaining", count_id, count_id_color);
    }

    if ((name_length == 0)) {
        generate_alert(status_text_zero, status_id, status_color_zero);
        generate_alert(instruction_text, instruction_id, instruction_id_color);
        cancel_alert(count_id);
        return false;
    }
    if ((name_length != 0) && (get_name_value.match(regex)) && (name_length <= number_of_characters)) {
        generate_alert(status_text_success, status_id, status_color_success);
        return true;

    } else {
        generate_alert(status_text_not_success, status_id, status_color_not_success);
        return false;
    }

}





function check_gender(success_message, error_message, status_element_id, gender_value_id, success_text_color, error_text_color) {
    var gender_value = get_element_value(gender_value_id);
    if ((gender_value != "") || (gender_value == "Male") || (gender_value == "Female")) {
        generate_alert(success_message, status_element_id, success_text_color);
    } else {
        generate_alert(error_message, status_element_id, error_text_color);
    }
}



function password_match_keyup(interval_time, instruction_id, instruction_id_color, instruction_text, form_input_id, number_of_allowed_characters, count_id, count_id_color, count_exceeded_color, status_id, status_color_zero, status_text_zero, status_color_success, status_text_success, status_color_not_success, status_text_not_success, regex, main_password_id) {

    var interval = setInterval(password_match(instruction_id, instruction_id_color, instruction_text, form_input_id, number_of_allowed_characters, count_id, count_id_color, count_exceeded_color, status_id, status_color_zero, status_text_zero, status_color_success, status_text_success, status_color_not_success, status_text_not_success, regex, main_password_id), interval_time);

}



function password_match(instruction_id, instruction_id_color, instruction_text, form_input_id, number_of_allowed_characters, count_id, count_id_color, count_exceeded_color, status_id, status_color_zero, status_text_zero, status_color_success, status_text_success, status_color_not_success, status_text_not_success, regex, main_password_id) {
    cancel_alert(instruction_id);
    var get_name_value = get_element_value(form_input_id);
    var get_main_password = get_element_value(main_password_id);
    var name_length = get_name_value.length;
    var number_of_characters = number_of_allowed_characters;
    var length_count = number_of_characters - name_length;
    if (length_count < 0) {
        generate_alert("Error character range of " + number_of_characters + " exceeded", count_id, count_exceeded_color);

    } else {
        generate_alert(length_count + " characters remaining", count_id, count_id_color);
    }

    if ((name_length == 0)) {
        generate_alert(status_text_zero, status_id, status_color_zero);
        generate_alert(instruction_text, instruction_id, instruction_id_color);
        cancel_alert(count_id);
        return false;
    }
    if ((name_length != 0) && (get_name_value.match(regex)) && (name_length <= number_of_characters) && (get_name_value == get_main_password)) {
        generate_alert(status_text_success, status_id, status_color_success);
        return true;

    } else {
        generate_alert(status_text_not_success, status_id, status_color_not_success);
        return false;
    }

}



function generate_validation_alert(error_message, element_id, text_color) {
    var ToElement = document.getElementById(element_id);
    ToElement.innerHTML = error_message;
    ToElement.style.color = text_color;
}
