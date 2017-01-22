import React ,{Component} from 'react'
import {View ,Image} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Container, Content, List, ListItem, Text } from 'native-base';

export default class index extends Component{
	render(){

		var items = [	'Ebsco A to Z' ,
						'KU Library Catalog' ,
						'2ebook Digital Library' ,
						'ABI/INFORM' ,
						'Academic Search Complete' ,
						'Access English' ,
						'ACM Digital Library' ,
						'ACS Publications' ,
						'Acta Horticulturae Online' ,
						'AIP Journals' ,
						'APS Journals' ,
						'ANNUAL REVIEWS' ,
						'ASCE' ,
						'ASME' ,
						'Audiobook Collection (EBSCOhost)' ,
						'Business Source Complete',
						'CAB Direct',
						'Cambridge Books Online',
						'Communication & Mass Media Complete (CMMC)',
						'Computers & Applied Sciences Complete (CASC)',
						'CRCnetBASE eBooks',
						'ProQuest Dissertations & Theses: Full Text',
						'EBSCO eBook Collection',
						'EconLit™ with Full Text',
						'Education Research Complete',
						'Emerald Management (EM92)',
						'Emerald eBook Series',
						'Emerald Emerging Markets Case Studies Collection (EEMCS)',
						'Environment Complete',
						'Food Science Source',
						'Full-Text Finder',
						'Gale Lingo',
						'Gale Virtual Reference Library',
						'Humanities Source',
						'IEEE/IEE Electronic Library (IEL)',
						'IET Digital Library',
						'IET Inscpec Direct',
						'iQNewsClip',
						'ISI Web of Science',
						'Knovel',
						'KU E-Thesis',
						'Library Press Display',
						'National Geographic Virtual Library',
						'NewsCenter',
						'Oxford Scholarship Online',
						'PressReader',
						'Project Euclid',
						'ProQuest Agricultural Science Collection',
						'Reaxys',
						'Science Online & Science Now',
						'Science Direct eBooks',
						'ScienceDirect eJournals',
						'SciFinder',
						'SCOPUS',
						'Social Sciences Full Text (H.W. Wilson)',
						'SocINDEX with Full Text',
						'SPORTDiscus WITH FULLTEXT',
						'SpringerLink(E-books)',
						'SpringerLink (E-journals)',
						'Taylor & Francis eBooks',
						'Taylor & Francis Journals',
						'TDC (ThaiLIS Digital Collection)',
						'Testing and Education Reference Center (TERC)',
						'Wiley Online Library',
						'Wiley eBooks',
						'Wilson Web',
						'Woodhead ebooks',
						'World Scientific eBooks',
						'WorldCat Local & WorldCat Knowledge Base'];

		return(
			<Container>
                <Content>
                    <List dataArray={items}
                        renderRow={(item) =>
                            <ListItem>
                                <Text>{item}</Text>
                            </ListItem>
                        }>
                    </List>
                </Content>
            </Container>
		)
	}
} 