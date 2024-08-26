package com.yupi.yudada.model.dto.statistic;

import lombok.Data;

/**
 * App 回答提交统计
 */
@Data
public class AppAnswerCountDTO {

    /**
     * 应用id
     */
    private Long appId;
    /**
     * 回答数量
     */
    private Long answerCount;
}

