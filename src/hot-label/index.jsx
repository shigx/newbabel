import React, { Component } from 'react'
// import './index.scss'
// import chunk from './../../lib/chunk'
// import { reportClick } from 'lib/ping'
// import { activityIdRaw=2, pageType } from '../../constants/index'

/**
 * 热搜词组件
 * canChange：false 默认不可以换一换，展示7个词
 * didmount 的时候就已经确定所有数据  想要动态改变请重载组件
 * @export
 * @class HotWord
 * @extends {Component}
 */
export default class HotLabel extends Component {
	constructor(props) {
		super(props)

		this.state = {
			showIndex: 0,
			showList: [],
			chunkList: [],
			canChange: false
		}
		this.handleChange = this.handleChange.bind(this)
	}

	render() {
		let { textColor = '#a8441c', bgColor, isTag = false, groupData } = this.props
		const wordList = groupData.list

		const { canChange } = this.state
		const { showList } = this.state
		if (showList && showList.length <= 5) {
			return null
		}
		return (
			<div
				className="mod-hot-lable-4u"
				style={{ color: textColor, backgroundColor: bgColor }}
			>

				<span className="hot-word-title rpt-id" data-id="01411708">
					热门搜索:
				</span>

				{/* {isTag && (
					<span className="hot-word-title white">
						<span className="icon" />
						热门推荐:
					</span>
				)} */}
				{this._renderWord(showList, canChange)}
				{canChange && wordList && wordList.length >= 6 && (
					<span onClick={this.handleChange} className="hot-word-change">
						换一批
					</span>
				)}
			</div>
		)
	}

	_renderWord(showList, canChange) {
		const { onClick, groupData } = this.props
		return showList.map((item, index) => {
			if (!canChange && index > 6) {
				return null
			}
			return (
				<span
					key={'wd' + index}
					className="hot-word-panel"
					onClick={onClick && onClick.bind(this, { groupData, item, index })}
				>
					{item.name}
				</span>
			)
		})
	}

	componentDidMount() {
		const { canChange = false, groupData } = this.props
		const wordList = groupData.list
		if (wordList && wordList.length > 0) {
			if (canChange && wordList.length >= 12) {
				let chunkList = chunk(wordList, 6)
				if (wordList.length % 6 !== 0) {
					chunkList.pop()
				}
				this.setState({
					showList: chunkList[0],
					chunkList,
					canChange: true
				})
			} else {
				this.setState({
					showList: wordList
				})
			}
		}
	}
	handleChange() {
		const { showIndex, chunkList } = this.state
		let changeIndex = showIndex + 1
		if (changeIndex === chunkList.length) {
			changeIndex = 0
		}
		// reportClick({
		// 	eventId: 'Babel_dev_adv_618_RecommendChange',
		// 	eventParam: `${activityIdRaw}_7500986161_02981613_1_7801115765_03344177_1_${pageType}`
		// })
		this.setState({
			showIndex: changeIndex,
			showList: chunkList[changeIndex]
		})
	}
}
