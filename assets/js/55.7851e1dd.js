(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{272:function(e,t,a){"use strict";a.r(t);var o=a(0),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"overview-of-antara-modules-part-ii"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview-of-antara-modules-part-ii"}},[e._v("#")]),e._v(" Overview of Antara Modules - Part II")]),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("Welcome to an "),a("b",[e._v("Overview of Antara Modules - Part II.")])]),e._v(" "),a("p",[e._v("The following content is provided for developers desiring to discover deeper levels of potential in Komodo software. The content covers technical aspects of Antara Modules that are not necessary for a common user to understand. Learning this content can help any developer in the Komodo ecosystem utilize or create new Antara Modules.")]),e._v(" "),a("h4",{attrs:{id:"assumptions-for-this-content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#assumptions-for-this-content"}},[e._v("#")]),e._v(" Assumptions for this Content")]),e._v(" "),a("p",[e._v("This discussion is intended for developers who feel confident in at least one mainstream programming language, and who understand the core concepts of blockchain and Komodo technology.")]),e._v(" "),a("p",[e._v("Other readers, such as business or marketing developers, may also find the content useful, although some topics may be difficult to understand. We invite any interested reader to reach out to our team on "),a("a",{attrs:{href:"https://komodoplatform.com/discord",target:"_blank",rel:"noopener noreferrer"}},[e._v("Discord"),a("OutboundLink")],1),e._v(" with questions.")]),e._v(" "),a("p",[e._v("Consider reading the following resources, if necessary.")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/basic-docs/antara/antara-tutorials/overview-of-antara-modules-part-i.html"}},[e._v("Overview of Antara Modules - Part I")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/basic-docs/start-here/core-technology-discussions/introduction.html"}},[e._v("Core Technology Discussions")])],1),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/bitcoinbook/bitcoinbook",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mastering Bitcoin"),a("OutboundLink")],1)])]),e._v(" "),a("h4",{attrs:{id:"before-we-begin-a-brief-note-for-normal-developers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#before-we-begin-a-brief-note-for-normal-developers"}},[e._v("#")]),e._v(" Before We Begin: A Brief Note for Normal Developers")]),e._v(" "),a("p",[e._v("Creating a new Antara Module is challenging. Fortunately, not every developer in the Komodo ecosystem is expected to program new modules from scratch. Rather, Komodo anticipates that many developers will consume existing modules without attempting to create new modules.")]),e._v(" "),a("p",[e._v("Each module built on the Antara framework can be designed to have Remote Procedure Calls (RPC's) that can be called quickly and easily from other software and programming languages.")]),e._v(" "),a("p",[e._v("A good example can be seen in the MuSig module. This module uses the Antara framework to enable a complicated and useful technology called Schnorr Signatures. The RPC's for this module allow any developer of essentially any skill level to adopt MuSig functionality into their software without having to gain an in-depth understanding of Schnorr technology.")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/basic-docs/antara/antara-api/musig.html#introduction"}},[e._v("See the MuSig module documentation here")])],1),e._v(" "),a("p",[e._v("As the library of available modules grows, so too do the advantages to the many types of developers in the Komodo ecosystem.")]),e._v(" "),a("h2",{attrs:{id:"understanding-the-problem-that-antara-modules-solve"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#understanding-the-problem-that-antara-modules-solve"}},[e._v("#")]),e._v(" Understanding the Problem that Antara Modules Solve")]),e._v(" "),a("p",[e._v("Antara is Komodo's technology framework that developers use while creating decentralized software. Antara Modules are but one aspect of the wider Antara framework. The modules are a crucial element of the framework, as they allow any capable developer to directly add arbitrary code into the Smart Chain itself.")]),e._v(" "),a("p",[e._v("The reader may better understand the purpose and use case of Antara Modules by first understanding the key problem that they solve.")]),e._v(" "),a("h4",{attrs:{id:"a-consensus-mechanism-is-not-easy-to-create-or-change"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-consensus-mechanism-is-not-easy-to-create-or-change"}},[e._v("#")]),e._v(" A Consensus Mechanism Is Not Easy to Create or Change")]),e._v(" "),a("p",[e._v("Adding new code into a blockchain's consensus mechanism (CM) is a challenging task. Creating an entirely new CM is more difficult by an order of magnitude. Yet, despite these facts, often when an experienced developer first approaches blockchain technology with creative intent, their initial impulse is to dive directly into the CM itself. As time passes, the developer can come to a realization that they are attempting to solve a problem that is too large for any one person.")]),e._v(" "),a("p",[e._v("Consider the Bitcoin consensus mechanism. This protocol is approximately ten years old and receives perhaps more attention than all other blockchain protocols combined. Every year, thousands upon thousands of the world's most intelligent developers, mathematicians, and cryptographers pore over the intricacies of this profitable technology. Yet, despite this valuable insight, mistakes in the code continue to reveal themselves: in 2018, the Bitcoin Core and Bitcoin Cash teams together "),a("a",{attrs:{href:"https://www.coindesk.com/the-latest-bitcoin-bug-was-so-bad-developers-kept-its-full-details-a-secret",target:"_blank",rel:"noopener noreferrer"}},[e._v("discovered a flaw in the code"),a("OutboundLink")],1),e._v(" that would have allowed a malicious user to print an arbitrary number of new Bitcoins.")]),e._v(" "),a("p",[e._v("Mistakes in the code of a CM can cause economic instability, and volatility of this nature can wreak havoc on the lives of the CM's users. For this reason, seasoned blockchain engineers often avoid changing the CM altogether, once it is relatively stable.")]),e._v(" "),a("p",[e._v("For those few projects that create a useful and unique consensus mechanism, a new challenge immediately presents itself. If the CM relies on a Proof of Work type model, the project team must attract a sufficient number of miners. If the CM is more akin to Proof of Stake, the team must ensure the blockchain's total stake is distributed in a manner that ensures trustlessness. Neither of these tasks are easy to achieve.")]),e._v(" "),a("p",[e._v("In light of these challenges, the blockchain engineer finds themselves confronted with a paradox. The engineer desires to create something new, and at the same time, they cannot easily change the core software.")]),e._v(" "),a("h4",{attrs:{id:"a-popular-but-flawed-solution-the-decentralized-virtual-machine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-popular-but-flawed-solution-the-decentralized-virtual-machine"}},[e._v("#")]),e._v(" A Popular, But Flawed Solution: The Decentralized Virtual Machine")]),e._v(" "),a("p",[e._v("A popular solution to this paradox is to associate the consensus mechanism (CM) with a virtual machine (VM). This method was made popular by the Ethereum project.")]),e._v(" "),a("p",[e._v("In this model, the CM's design can be similar to existing and stable CM's, but it has one difference. The CM listens to instructions given by an external VM that is decentralized across all validating nodes. While code inside the VM can be arbitrary, the CM does not listen to the code's execution. Instead, the CM only listens to the same data as before: the history of transactions and associated meta data.")]),e._v(" "),a("p",[e._v("This solution is more effective than writing an entirely new CM, yet the solution is limited. The limitations include: the requirement of working in the mandatory VM programming language, such as Solidity; an excessive dependency on the core-software development team; volatile economics, and a lack of blockchain processing and storage capacity.")]),e._v(" "),a("p",[e._v("The requirement of the limited programming language derives from security concerns. All validating nodes in the decentralized VM must run all blockchain-related code in the ecosystem. Having this code written in a unique language designed for the VM reduces the available opportunities to malicious actors. While the limitation provides baseline security, the customized and often unstable nature of the VM programming language can make the creative process difficult. Also, the need to master a new language adds an additional burden to the developer.")]),e._v(" "),a("p",[e._v("The dependency on the blockchain's core engineers also slows creative progress for ecosystem developers. When the ecosystem developer discovers a new core-level technology that would increase the developer's productivity and creativity, they must convince the main chain's core-software team to implement the new feature. The core-software engineers, however, may have conflicting interests, as their decisions must meet the needs of all developers and users in their ecosystem.")]),e._v(" "),a("p",[e._v('In many of the VM-based models, economics for blockchain usage can be volatile. The underlying "gas" token that the VM requires (such as Ether) can change in price and value according to the interests of the uneducated masses. This may sound advantageous to a speculator, but a practical business will find that the volatility scares away new users.')]),e._v(" "),a("p",[e._v("The fact that the VM frequently relies on a single blockchain further hinders developers and users. Block space can be in short supply due to high demand on popular chains. Furthermore, data that is entirely irrelevant to the developer can become required baggage.")]),e._v(" "),a("p",[e._v("These challenges make the VM model unpleasant for many experienced blockchain engineers. In fact, before Komodo existed, these very concerns inspired the Komodo engineers to avoid the VM model in search of a better solution.")]),e._v(" "),a("p",[e._v("Antara Modules provide this solution through Komodo's integration of a technology called CryptoConditions.")]),e._v(" "),a("h2",{attrs:{id:"cryptoconditions-an-industry-wide-standard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cryptoconditions-an-industry-wide-standard"}},[e._v("#")]),e._v(" CryptoConditions: An Industry-Wide Standard")]),e._v(" "),a("p",[e._v("CryptoConditions is a technology that allows for arbitrary logical conditions and fulfillments to be evaluated as a part of consensus. This allows for a Smart Chain's consensus mechanism to evaluate the results of arbitrary code and update state in the blockchain's data in a decentralized and secure fashion.")]),e._v(" "),a("p",[e._v("CryptoConditions technology is not a new concept. The "),a("a",{attrs:{href:"https://interledger.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Interledger"),a("OutboundLink")],1),e._v(" team originally proposed this technology in 2016.")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://tools.ietf.org/html/draft-thomas-crypto-conditions-01",target:"_blank",rel:"noopener noreferrer"}},[e._v("original proposal"),a("OutboundLink")],1),e._v(" was that it would be an open-source industry-wide standard format. The Interledger team does not seem to have continued exploring the technology beyond the original proposal.")]),e._v(" "),a("p",[e._v("Komodo, on the other hand, found the CryptoConditions concept to be intriguing. In 2018, Komodo adopted this open-source technology into the suite of offerings in our Antara framework.")]),e._v(" "),a("p",[e._v("Our implementation uses many of the key ideas put forth by the Interledger team, and at the same time we depart in several significant ways. Those who are curious for specific details on this topic can explore the open-source code in the respective repositories.")]),e._v(" "),a("p",[e._v("The important takeaway is that Antara Modules rely on a core technology called, CryptoConditions (CC). This technology allows a developer to add arbitrary logical conditions and fulfillment to their Smart Chain, and to rely on the consensus mechanism to ensure state integrity in a decentralized environment.")]),e._v(" "),a("h2",{attrs:{id:"creativity-at-the-consensus-level-without-losing-the-consensus-mechanism"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creativity-at-the-consensus-level-without-losing-the-consensus-mechanism"}},[e._v("#")]),e._v(" Creativity at the Consensus Level, Without Losing the Consensus Mechanism")]),e._v(" "),a("p",[e._v("Antara Modules and CryptoConditions together allow a developer to add arbitrary code at the consensus level, and within the core software's daemon, without interfering with the existing consensus mechanism (CM). This grants the developer the ability to add core-level features and innovations without waiting for the approval of other members of the Komodo ecosystem. Combined with Komodo's Bitcoin-hash rate security, the simplicity of Antara Modules provides the developer with a competitive level of creative freedom.")]),e._v(" "),a("p",[e._v("The entry point between Antara Modules and the CM is a new Bitcoin-script "),a("a",{attrs:{href:"https://bitcoin.org/en/glossary/op-code",target:"_blank",rel:"noopener noreferrer"}},[e._v("operation code"),a("OutboundLink")],1),e._v(', "OP_CHECKCRYPTOCONDITIONS", or OP_CCC for short. When executed, OP_CCC is able to initiate additional arbitrary code that is written in any programming language, assuming the language can call and execute C/C++ code in return. The arbitrary code is separate from the CM, thus maintaining the CM\'s reliability. When the arbitrary code completes, OP_CCC returns a '),a("code",[e._v("true")]),e._v(" or "),a("code",[e._v("false")]),e._v(" statement to the daemon. If the returned OP_CCC value is "),a("code",[e._v("true")]),e._v(", the daemon performs a transaction.")]),e._v(" "),a("p",[e._v("The transaction can contain meta data in the normal manner. Therefore, these transactions can also implement other data-storage features of Komodo software. Examples include the "),a("RouterLink",{attrs:{to:"/basic-docs/smart-chains/smart-chain-api/blockchain.html#kvupdate"}},[e._v("key-value storage")]),e._v(" feature, the "),a("RouterLink",{attrs:{to:"/basic-docs/antara/antara-api/oracles.html#introduction"}},[e._v("Oracles Antara Module")]),e._v(", or the native "),a("code",[e._v("vout")]),e._v(" and "),a("code",[e._v("batontxid")]),e._v(" key-value pairs.")],1),e._v(" "),a("p",[e._v("With access to the meta data established, Antara Modules are able to act as an application-state manager. State-related data is held in utxos that are accessible to the CM. As application-state management is based on the utxo model, the management also follows the CM's rules for consensus. This powerful combination allows the developer to collect, organize, and act upon data in a securely decentralized manner.")]),e._v(" "),a("p",[e._v("In addition, once the data is notarized, it can also be called by other Komodo-based Smart Chains, depending on the manner in which the developer(s) form their chain. This allows developers to form clusters of blockchains to enhance their software, as opposed to relying on a single blockchain, or on a single child chain. The speed and data-storage capabilities of a cluster are thus exponentially greater than the offerings of many VM-based competitors.")]),e._v(" "),a("p",[e._v("Also of note is the simplicity of the Antara Module architecture. All new code created for an individual Antara Module is contained in an optional library. Modules from the library are included in compilation only on participating blockchains. In this manner, developers who desire a module's functionality can include the necessary libraries, and those who do not require the module can avoid this excess baggage.")]),e._v(" "),a("p",[e._v("The Komodo daemon has no need of an external VM. This eliminates what would otherwise be a cumbersome requirement for the developer and the core engineers. At the same time, the daemon offers all the capabilities of a VM-based blockchain — ⁠and arguably more.")]),e._v(" "),a("h2",{attrs:{id:"antara-modules-in-action-accomplishing-years-worth-of-work-in-but-a-weekend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#antara-modules-in-action-accomplishing-years-worth-of-work-in-but-a-weekend"}},[e._v("#")]),e._v(" Antara Modules In Action: Accomplishing Years' Worth of Work In But A Weekend")]),e._v(" "),a("p",[e._v("Examples of the power of Antara Modules can be found by observing existing modules. Consider how Antara allowed the Komodo ecosystem to swiftly and easily upgrade the Komodo consensus mechanism (CM) to include quantum-proofing capabilities.")]),e._v(" "),a("p",[e._v("In years past, other blockchain projects in the cryptocurrency community had focused on manually upgrading their CM for quantum-proofing protection. Although this feature appeared to be an advantage, this was not true. Adding customized code to the CM itself to protect addresses from quantum-capable computers was a time-consuming and expensive process.")]),e._v(" "),a("p",[e._v("Paradoxically, once the new quantum-proof CM was achieved, it only served to isolate the project team. The code itself was untested and unreliable, and the users of the cryptocurrency community had to endure these roadblocks. Furthermore, the customized CM was often incompatible with much of the activity in the open-source blockchain ecosystem; for each industry-wide technological advancement, the team often had to adapt their customized CM on their own.")]),e._v(" "),a("p",[e._v("Komodo's engineers chose not to spend energy building a new quantum-proof CM, but rather they worked to add Antara Modules first. Once this technology was available, the Komodo core software team took existing quantum-proofing technology, read summaries published by academics and researchers, and created a new Antara Module to add quantum-proofing functionality to the Komodo CM.")]),e._v(" "),a("p",[e._v("The time between project initiation and releasing a beta version for community testing was approximately one weekend. Only one core developer's attention was required. The Komodo daemon remains compatible with all other software features as before, able to quickly adopt new ideas from others in the open-source community as soon as they arrive. At the same time, users who desire quantum proofing for their long-term financial interests have a module readily available, and users who are not interested have not experienced an interruption in their blockchain services.")]),e._v(" "),a("p",[e._v("The ability to adopt the ideas of others quickly, while maintaining the accomplishments, security, and compatibilities of one's predecessors, makes Antara Modules a wise choice for experienced developers who wish to have the most advanced technology available without a significant hassle.")])])}),[],!1,null,null,null);t.default=n.exports}}]);